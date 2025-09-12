let socket;
let backoff = 1000;

const statusEl = document.getElementById('status');
const latestEl = document.getElementById('latest');
const freqInput = document.getElementById('freq');
const setBtn = document.getElementById('setFreq');
const snapBtn = document.getElementById('snapshot');

function setStatus(txt) {
  statusEl.innerHTML = 'Status: <em>' + txt + '</em>';
}

function connect() {
  setStatus('connecting...');
  socket = new WebSocket("ws://localhost:3000");

  socket.addEventListener('open', () => {
    backoff = 1000;
    setStatus('connected');
    console.log('ws open');
  });

  socket.addEventListener('message', (ev) => {
    let msg;
    try { 
      msg = JSON.parse(ev.data); 
    } catch (e) { 
      console.warn('non-json', ev.data); 
      return; 
    }

    if (msg.type === 'welcome') {
      console.log('👋 welcome', msg);
    } else if (msg.type === 'telemetry' || msg.type === 'snapshot') {
      latestEl.textContent = JSON.stringify(msg.payload, null, 2);
    } else if (msg.type === 'ack') {
      console.log('ack', msg);
    } else if (msg.type === 'error') {
      console.warn('server error', msg);
    }
  });

  socket.addEventListener('close', () => {
    setStatus('disconnected — reconnecting in ' + (backoff / 1000) + 's');
    console.log('ws closed, reconnecting in', backoff);
    setTimeout(connect, backoff);
    backoff = Math.min(backoff * 1.5, 30_000);
  });

  socket.addEventListener('error', (err) => {
    console.error('ws error', err);
    socket.close();
  });
}

setBtn.addEventListener('click', () => {
  const v = Number(freqInput.value);
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    return alert('socket closed');
  }
  socket.send(JSON.stringify({ type: 'set_freq', value: v }));
});

snapBtn.addEventListener('click', () => {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    return alert('socket closed');
  }
  socket.send(JSON.stringify({ type: 'snapshot' }));
});

connect();
