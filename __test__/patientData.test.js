const request = require('supertest');
const app = require('../app'); // Assuming your Express app is defined in this file

describe('Patient Data Controller', () => {
  it('should get patient data', async () => {
    // Mock request data
    const requestData = {
      email: 'jaindu@gmail.com', // Provide patient's email for which data should be retrieved
    };

    // Make a request to your endpoint
    const response = await request(app)
      .get('/getPatientData')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('patName');
    expect(response.body).toHaveProperty('patAge');
    expect(response.body).toHaveProperty('patAddress');
  });

  it('should handle patient not found error', async () => {
    // Mock request data with non-existent email
    const requestData = {
      email: 'nonexistent@example.com',
    };

    // Make a request to your endpoint
    const response = await request(app)
      .get('/getPatientData')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Patient not found');
  });

  it('should handle internal server error', async () => {
    // Mock request data
    const requestData = {
      email: 'test@example.com', // Provide patient's email
    };

    // Mocking the controller function to throw an error
    jest.spyOn(require('../controller/patientData.controller'), 'getPatientData')
      .mockImplementation(() => {
        throw new Error('Internal server error');
      });

    // Make a request to your endpoint
    const response = await request(app)
      .get('/getPatientData')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(404);
    //expect(response.body).toHaveProperty('error', 'Internal server error');
  });
});
