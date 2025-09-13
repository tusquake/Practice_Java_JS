const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch'); 

class ObjectStoreClient {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  async uploadFile(key, filePath, metadata = {}) {
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    
    if (Object.keys(metadata).length > 0) {
      form.append('metadata', JSON.stringify(metadata));
    }

    const response = await fetch(`${this.baseUrl}/objects/${key}`, {
      method: 'PUT',
      body: form
    });

    return await response.json();
  }

  async downloadFile(key, outputPath) {
    const response = await fetch(`${this.baseUrl}/objects/${key}`);
    
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }

    const fileStream = fs.createWriteStream(outputPath);
    response.body.pipe(fileStream);

    return new Promise((resolve, reject) => {
      fileStream.on('finish', resolve);
      fileStream.on('error', reject);
    });
  }

  async deleteObject(key) {
    const response = await fetch(`${this.baseUrl}/objects/${key}`, {
      method: 'DELETE'
    });

    return await response.json();
  }

  async listObjects() {
    const response = await fetch(`${this.baseUrl}/objects`);
    return await response.json();
  }

  async getMetadata(key) {
    const response = await fetch(`${this.baseUrl}/objects/${key}/metadata`);
    return await response.json();
  }
}

async function example() {
  const client = new ObjectStoreClient();

  try {
    console.log('Uploading file...');
    const uploadResult = await client.uploadFile('my-document.txt', './README.md', {
      author: 'John Doe',
      project: 'object-store'
    });
    console.log('Upload result:', uploadResult);

    console.log('Listing objects...');
    const listResult = await client.listObjects();
    console.log('Objects:', listResult);

    console.log('Getting metadata...');
    const metadata = await client.getMetadata('my-document.txt');
    console.log('Metadata:', metadata);

    console.log('Downloading file...');
    await client.downloadFile('my-document.txt', './downloaded-file.txt');
    console.log('File downloaded successfully');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

example();

module.exports = ObjectStoreClient;