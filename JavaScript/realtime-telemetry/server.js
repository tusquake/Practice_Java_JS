// server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function genId() {
  return 'c_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2,8);
}

function createTelemetry() {
  return {
    temp: Number((20 + Math.random() * 10).toFixed(2)),
    hum: Number((40 + Math.random() * 20).toFixed(2)),
    ts: Date.now()
  };
}

wss.on('connection', (ws, req) => {
  ws.id = genId();
  ws.isAlive = true;
  ws.freq = 1000; // default ms
  console.log(`client connected: ${ws.id}`);

  // send welcome
  ws.send(JSON.stringify({ type: 'welcome', clientId: ws.id, message: 'connected' }));

  // start per-client telemetry loop
  function startTelemetryLoop() {
    if (ws._telemetryInterval) clearInterval(ws._telemetryInterval);
    ws._telemetryInterval = setInterval(() => {
      if (ws.readyState !== WebSocket.OPEN) return;
      const payload = createTelemetry();
      ws.send(JSON.stringify({ type: 'telemetry', payload }));
    }, ws.freq);
  }
  startTelemetryLoop();

  // message handler
  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch (e) {
      return ws.send(JSON.stringify({ type: 'error', message: 'invalid-json' }));
    }

    // message routing
    if (msg.type === 'set_freq') {
      const n = Number(msg.value) || 1000;
      ws.freq = Math.max(100, n); 
      startTelemetryLoop();
      ws.send(JSON.stringify({ type: 'ack', message: 'freq_updated', value: ws.freq }));
    } else if (msg.type === 'snapshot') {
      const snap = createTelemetry();
      ws.send(JSON.stringify({ type: 'snapshot', payload: snap }));
    } else {
      ws.send(JSON.stringify({ type: 'error', message: 'unknown_type' }));
    }
  });

  ws.on('pong', () => { ws.isAlive = true; });

  ws.on('close', () => {
    clearInterval(ws._telemetryInterval);
    console.log(`client disconnected: ${ws.id}`);
  });
});

const heartbeatInterval = setInterval(() => {
  wss.clients.forEach(ws => {
    if (!ws.isAlive) {
      console.log('terminating dead connection', ws.id);
      return ws.terminate();
    }
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
