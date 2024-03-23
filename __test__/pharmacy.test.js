// const request = require('supertest');
// const { searchPharmacies } = require('../controller/pharmacy.controller');
// const pharmacyModel = require('../model/pharmacy.model');
// const geolib = require('geolib');

// jest.mock('../model/pharmacy.model');
// jest.mock('geolib');

// describe('searchPharmacies', () => {
//   test('should return nearest pharmacy details', async () => {
//     const req = {
//       query: {
//         userMedicine: 'medicineName',
//         userLatitude: 40.7128,
//         userLongitude: -74.0060
//       }
//     };

//     const res = {
//       json: jest.fn()
//     };

//     const mockPharmacies = [
//       {
//         pharmacy: 'Pharmacy A',
//         location: { coordinates: [40.713, -74.005] },
//         city: 'New York',
//         link: 'http://maps.com/pharmacyA',
//         contact: '123-456-7890'
//       },
//       {
//         pharmacy: 'Pharmacy B',
//         location: { coordinates: [40.715, -74.008] },
//         city: 'New York',
//         link: 'http://maps.com/pharmacyB',
//         contact: '987-654-3210'
//       }
//     ];

//     const expectedResponse = {
//       nearestPharmacyName: 'Pharmacy A',
//       city: 'New York',
//       userLocation: { latitude: 40.7128, longitude: -74.006 },
//       mapLink: 'http://maps.com/pharmacyA',
//       contact: '123-456-7890'
//     };

//     pharmacyModel.find.mockResolvedValue(mockPharmacies);
//     geolib.getDistance.mockReturnValue(1000); // Distance in meters

//     await searchPharmacies(req, res);

//     expect(res.json).toHaveBeenCalledWith(expectedResponse);
//   });

//   test('should handle no pharmacies found', async () => {
//     const req = {
//       query: {
//         userMedicine: 'medicineName',
//         userLatitude: 40.7128,
//         userLongitude: -74.0060
//       }
//     };

//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis()
//     };

//     pharmacyModel.find.mockResolvedValue([]);

//     await searchPharmacies(req, res);

//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Medicine not found' });
//   });
//   test('should handle internal server error', async () => {
//     const req = {
//       query: {
//         userMedicine: 'medicineName',
//         userLatitude: 40.7128,
//         userLongitude: -74.0060
//       }
//     };
  
//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis()
//     };
  
//     pharmacyModel.find.mockRejectedValue(new Error('Database error')); // Update mock implementation
  
//     await searchPharmacies(req, res);
  
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
//   });
  

//   // test('should handle internal server error', async () => {
//   //   const req = {
//   //     query: {
//   //       userMedicine: 'medicineName',
//   //       userLatitude: 40.7128,
//   //       userLongitude: -74.0060
//   //     }
//   //   };

//   //   const res = {
//   //     json: jest.fn(),
//   //     status: jest.fn().mockReturnThis()
//   //   };

//   //   pharmacyModel.find.mockRejectedValue(new Error('Database error'));

//   //   await searchPharmacies(req, res);

//   //   expect(res.status).toHaveBeenCalledWith(500);
//   //   expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
//   // });
// });
