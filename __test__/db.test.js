const conn = require('/Users/jaindugajanayake/Documents/GitHub/Medvault_backend1/config/db.js'); // Adjust the path as per your project structure

describe('MongoDB Connection', () => {
    it('should connect to MongoDB', async () => {
      await new Promise((resolve, reject) => {
        conn.once('open', () => {
          resolve();
        }).on('error', (error) => {
          reject(error);
        });
      });
    }, 10000); // Increase timeout to 10 seconds
  });
  
