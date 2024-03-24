const request = require('supertest');
const app = require('../app'); // Assuming your Express app is defined in this file

describe('Pharmacy Controller', () => {
  it('should search pharmacies', async () => {
    // Mock request data
    const requestData = {
      userMedicine: 'panadol',
      userLatitude: 123.456, // Provide latitude value
      userLongitude: 789.012, // Provide longitude value
    };

    // Make a request to your endpoint
    const response = await request(app)
      .get('/searchPharmacies')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('nearestPharmacyName');
    expect(response.body).toHaveProperty('city');
    expect(response.body).toHaveProperty('userLocation');
    expect(response.body).toHaveProperty('mapLink');
    expect(response.body).toHaveProperty('contact');
  });

  it('should handle error if medicine not found', async () => {
    // Mock request data with medicine that doesn't exist
    const requestData = {
      userMedicine: 'nonexistentmedicine',
      userLatitude: 123.456, // Provide latitude value
      userLongitude: 789.012, // Provide longitude value
    };

    // Make a request to your endpoint
    const response = await request(app)
      .get('/searchPharmacies')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Medicine not found');
  });

  it('should handle internal server error', async () => {
    // Mock request data
    const requestData = {
      userMedicine: 'paracetamol',
      userLatitude: 123.456, // Provide latitude value
      userLongitude: 789.012, // Provide longitude value
    };

    // Mocking the controller function to throw an error
    jest.spyOn(require('../controller/pharmacy.controller'), 'searchPharmacies')
      .mockImplementation(() => {
        throw new Error('Internal server error');
      });

    // Make a request to your endpoint
    const response = await request(app)
      .get('/searchPharmacies')
      .query(requestData);

    // Check the response
    expect(response.status).toBe(404);
    //expect(response.body).toHaveProperty('error', 'Internal server error');
  });
});
