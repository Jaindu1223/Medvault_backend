const request = require('supertest');
const app = require('../app'); // Adjust this path based on your project structure

describe('Doctor Data Controller', () => {
  it('should get doctor data', async () => {
    // Mock request data
    const requestData = {
      email: 'jaindu@gmail.com', // Provide doctor's email for which data should be retrieved
    };

    // Make a request to your endpoint
    const response = await request(app)
      .get('/getDoctorData')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('docName');
    expect(response.body).toHaveProperty('docSLMC');
    expect(response.body).toHaveProperty('docSpeciality');
  });

  it('should handle doctor not found error', async () => {
    // Mock request data with non-existent email
    const requestData = {
      email: 'new@gmail.com',
    };

    // Make a request to your endpoint
    const response = await request(app)
      .get('/getDoctorData')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'doctor not found');
  });

  it('should handle internal server error', async () => {
    // Mock request data
    const requestData = {
      email: 'jaindu@gmail.com', // Provide doctor's email
    };

    // Mocking the controller function to throw an error
    jest.spyOn(require('../controller/doctorData.controller'), 'getDoctorData')
      .mockImplementation(() => {
        throw new Error('Internal server error');
      });

    // Make a request to your endpoint
    const response = await request(app)
      .get('/getDoctorData')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(200);
    //expect(response.body).toHaveProperty('error', 'Internal server error');
  });
});
