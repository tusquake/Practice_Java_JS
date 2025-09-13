# 🗄️ Simple Object Store

A lightweight file storage system built with Node.js that mimics cloud object storage services like Amazon S3.

## What is an Object Store?

An **Object Store** is a data storage system that manages data as objects rather than files in folders. Each object contains:
- **Data**: The actual file content
- **Metadata**: Information about the file (size, type, custom properties)
- **Unique Key**: A name to identify and retrieve the object

**Examples of Object Stores:**
- Amazon S3
- Google Cloud Storage
- Microsoft Azure Blob Storage

## Why Object Storage?

### Traditional File System:
```
📁 Documents/
  📁 Images/
    📄 photo1.jpg
    📄 photo2.jpg
  📁 Videos/
    📄 movie.mp4
```

### Object Storage:
```
🗄️ Object Store:
  "user-profile-pic" → photo1.jpg + metadata
  "vacation-video" → movie.mp4 + metadata
  "document-pdf" → report.pdf + metadata
```

**Benefits:**
- **Scalable**: Store millions of files easily
- **Simple**: No complex folder structures
- **Metadata Rich**: Store custom information with each file
- **Web-Friendly**: Access via simple HTTP APIs

## 🚀 Quick Start

### 1. Install & Run
```bash
# Clone the project
git clone <repo-url>
cd simple-object-store

# Install dependencies
npm install

# Start server
npm start
```

### 2. Open Web Interface
- Go to `http://localhost:3000`
- Upload, download, and manage files

### 3. Use API
```bash
# Upload a file
curl -X PUT -F "file=@photo.jpg" http://localhost:3000/objects/my-photo

# List all files
curl http://localhost:3000/objects

# Download a file
curl -O http://localhost:3000/objects/my-photo

# Delete a file
curl -X DELETE http://localhost:3000/objects/my-photo
```

## Simple API

### Upload Object
```http
PUT /objects/{key}
```
Upload a file with a unique key name.

### Get Object
```http
GET /objects/{key}
```
Download the file using its key.

### List Objects
```http
GET /objects
```
See all stored files with their information.

### Delete Object
```http
DELETE /objects/{key}
```
Remove a file from storage.

## How It Works

Our object store uses two folders:

```
storage/
├── data/           # Actual files (with random names for security)
│   ├── abc-123-def    # Your photo.jpg
│   └── xyz-789-ghi    # Your document.pdf
└── metadata/       # File information
    ├── my-photo.json     # Info about photo.jpg
    └── my-doc.json       # Info about document.pdf
```

**Why separate storage?**
- **Fast**: Check file info without loading large files
- **Secure**: Files stored with random names
- **Organized**: Easy to find and manage files

## Web Interface Features

- **Drag & Drop**: Simply drag files to upload
- **Real-time Updates**: See upload progress and status
- **File Management**: Download, view info, delete files
- **Responsive Design**: Works on phone, tablet, desktop
- **Modern UI**: Beautiful and easy to use

## Project Files

```
simple-object-store/
├── server.js          # Main server code
├── objectStore.js     # Storage logic
├── index.html         # Web interface
├── package.json       # Project setup
└── storage/           # Where files are stored
```

## Configuration

Change settings in the code:

```javascript
// In server.js
const port = 3000;                    // Server port
const maxFileSize = 100 * 1024 * 1024;  // 100MB limit

// In ObjectStore.js  
const storageDir = './storage';       // Where to store files
```

## Technologies Used

- **Node.js**: Server runtime
- **Express**: Web server framework
- **Multer**: File upload handling
- **HTML/CSS/JavaScript**: Web interface
- **File System**: Local storage

## Perfect For

- **Learning**: Understand how object storage works
- **Prototyping**: Quick file storage for apps
- **Small Projects**: Personal file management
- **Testing**: Mock cloud storage services

## 📝 Example Usage

```javascript
// JavaScript example
const formData = new FormData();
formData.append('file', fileInput.files[0]);

// Upload file
fetch('/objects/my-file', {
  method: 'PUT', 
  body: formData
})
.then(response => response.json())
.then(data => console.log('Uploaded!', data));
```

This project gives you a working object store system that you can understand, modify, and extend for your needs!