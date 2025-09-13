const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

class ObjectStore {
  constructor(storageDir = './storage') {
    this.storageDir = storageDir;
    this.metadataDir = path.join(storageDir, 'metadata');
    this.dataDir = path.join(storageDir, 'data');
    this.init();
  }

  async init() {
    try {
      await fs.mkdir(this.storageDir, { recursive: true });
      await fs.mkdir(this.metadataDir, { recursive: true });
      await fs.mkdir(this.dataDir, { recursive: true });
    } catch (error) {
      console.error('Failed to initialize storage directories:', error);
    }
  }

  // Generate unique object ID
  generateObjectId() {
    return crypto.randomUUID();
  }

  // Calculate file hash for integrity checking
  async calculateHash(filePath) {
    const fileBuffer = await fs.readFile(filePath);
    return crypto.createHash('sha256').update(fileBuffer).digest('hex');
  }

  // PUT - Store an object
  async putObject(key, filePath, metadata = {}) {
    try {
      const objectId = this.generateObjectId();
      const dataPath = path.join(this.dataDir, objectId);
      const metadataPath = path.join(this.metadataDir, `${key}.json`);

      // Copy file to storage
      await fs.copyFile(filePath, dataPath);

      // Get file stats
      const stats = await fs.stat(dataPath);
      const hash = await this.calculateHash(dataPath);

      // Store metadata
      const objectMetadata = {
        key,
        objectId,
        size: stats.size,
        hash,
        contentType: metadata.contentType || 'application/octet-stream',
        uploadTime: new Date().toISOString(),
        customMetadata: metadata.custom || {}
      };

      await fs.writeFile(metadataPath, JSON.stringify(objectMetadata, null, 2));

      return {
        success: true,
        objectId,
        key,
        size: stats.size,
        hash
      };
    } catch (error) {
      throw new Error(`Failed to store object: ${error.message}`);
    }
  }

  // GET - Retrieve an object
  async getObject(key) {
    try {
      const metadataPath = path.join(this.metadataDir, `${key}.json`);
      
      // Check if metadata exists
      try {
        await fs.access(metadataPath);
      } catch {
        throw new Error(`Object with key '${key}' not found`);
      }

      const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
      const dataPath = path.join(this.dataDir, metadata.objectId);

      // Verify data file exists
      try {
        await fs.access(dataPath);
      } catch {
        throw new Error(`Object data not found for key '${key}'`);
      }

      return {
        success: true,
        metadata,
        dataPath
      };
    } catch (error) {
      throw new Error(`Failed to retrieve object: ${error.message}`);
    }
  }


 // DELETE - Remove an object
  async deleteObject(key) {
    try {
      const metadataPath = path.join(this.metadataDir, `${key}.json`);
      
      // Get metadata first
      let metadata;
      try {
        metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
      } catch {
        throw new Error(`Object with key '${key}' not found`);
      }

      const dataPath = path.join(this.dataDir, metadata.objectId);

      // Remove data file
      try {
        await fs.unlink(dataPath);
      } catch (error) {
        console.warn(`Data file not found for key '${key}':`, error.message);
      }

      // Remove metadata file
      await fs.unlink(metadataPath);

      return {
        success: true,
        key,
        message: 'Object deleted successfully'
      };
    } catch (error) {
      throw new Error(`Failed to delete object: ${error.message}`);
    }
  }

  // LIST - List all objects
  async listObjects() {
    try {
      const files = await fs.readdir(this.metadataDir);
      const objects = [];

      for (const file of files) {
        if (file.endsWith('.json')) {
          const metadataPath = path.join(this.metadataDir, file);
          const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
          objects.push({
            key: metadata.key,
            size: metadata.size,
            uploadTime: metadata.uploadTime,
            contentType: metadata.contentType
          });
        }
      }

      return {
        success: true,
        objects,
        count: objects.length
      };
    } catch (error) {
      throw new Error(`Failed to list objects: ${error.message}`);
    }
  }

  // Get object metadata only
  async getObjectMetadata(key) {
    try {
      const metadataPath = path.join(this.metadataDir, `${key}.json`);
      const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
      
      return {
        success: true,
        metadata
      };
    } catch (error) {
      throw new Error(`Failed to get metadata: ${error.message}`);
    }
  }
}

module.exports = ObjectStore;
