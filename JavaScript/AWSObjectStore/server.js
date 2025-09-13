const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');  // <-- add this
const ObjectStore = require('./ObjectStore.js');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS (allow all origins)
app.use(cors());

// If you want only your frontend to access, replace with:
// app.use(cors({ origin: 'http://127.0.0.1:5500' }));

// Initialize object store
const objectStore = new ObjectStore('./storage');

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit
});

app.use(express.json());

// PUT /objects/:key - Upload an object
app.put('/objects/:key', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file provided' });
    }

    const key = req.params.key;
    const metadata = {
      contentType: req.file.mimetype,
      custom: req.body.metadata ? JSON.parse(req.body.metadata) : {}
    };

    const result = await objectStore.putObject(key, req.file.path, metadata);

    // Clean up uploaded file
    require('fs').unlinkSync(req.file.path);

    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /objects/:key - Download an object
app.get('/objects/:key', async (req, res) => {
  try {
    const key = req.params.key;
    const result = await objectStore.getObject(key);

    res.setHeader('Content-Type', result.metadata.contentType);
    res.setHeader('Content-Length', result.metadata.size);
    res.setHeader('ETag', result.metadata.hash);

    res.sendFile(path.resolve(result.dataPath));
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
});

// DELETE /objects/:key - Delete an object
app.delete('/objects/:key', async (req, res) => {
  try {
    const key = req.params.key;
    const result = await objectStore.deleteObject(key);
    res.json(result);
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
});

// GET /objects - List all objects
app.get('/objects', async (req, res) => {
  try {
    const result = await objectStore.listObjects();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /objects/:key/metadata - Get object metadata
app.get('/objects/:key/metadata', async (req, res) => {
  try {
    const key = req.params.key;
    const result = await objectStore.getObjectMetadata(key);
    res.json(result);
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Object Store API running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/health`);
});
