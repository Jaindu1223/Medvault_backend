// const { getDoctorData } = require('../controller/doctorData.controller');
// const doctorModel = require('../model/doctor.model');

// jest.mock('../model/doctor.model');

// describe('getDoctorData', () => {
//   test('should return doctor data with 200 status when doctor is found', async () => {
//     const req = {
//       query: {
//         email: 'doctor@example.com' // Sample doctor email
//       }
//     };

//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis()
//     };

//     const mockDoctor = {
//       name: 'Dr. John Doe',
//       SLMCregiNo: '12345',
//       speciality: 'Cardiology'
//     };

//     doctorModel.findOne.mockResolvedValue(mockDoctor);

//     await getDoctorData(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith(mockDoctor);
//   });

//   test('should return 404 status with error message when doctor is not found', async () => {
//     const req = {
//       query: {
//         email: 'nonexistent@example.com' // Nonexistent doctor email
//       }
//     };

//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis()
//     };

//     const errorMessage = 'Doctor not found';
//     doctorModel.findOne.mockResolvedValue(null);

//     await getDoctorData(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
//   });

//   test('should return 500 status with error message when an error occurs', async () => {
//     const req = {
//       query: {
//         email: 'doctor@example.com' // Sample doctor email
//       }
//     };

//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis()
//     };

//     const errorMessage = 'Internal server error';
//     doctorModel.findOne.mockRejectedValue(new Error(errorMessage));

//     await getDoctorData(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
//   });
// });
