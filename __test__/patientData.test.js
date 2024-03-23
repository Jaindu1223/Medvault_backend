// const { getPatientData } = require('../controller/patientData.controller');
// const userModel = require('../model/user.model');

// jest.mock('../model/user.model');

// describe('getPatientData', () => {
//   test('should return patient data with 200 status when patient is found', async () => {
//     const req = {
//       query: {
//         email: 'patient@example.com' // Sample patient email
//       }
//     };

//     const res = {
//       json: jest.fn()
//     };

//     const mockPatient = {
//       name: 'John Doe',
//       birthdate: '1990/01/01',
//       address: '123 Main St'
//     };

//     userModel.findOne.mockResolvedValue(mockPatient);

//     await getPatientData(req, res);

//     // Calculating age based on birthdate
//     const [day, month, year] = mockPatient.birthdate.split('/');
//     const birthDate = new Date(`${year}-${month}-${day}`);
//     const today = new Date();
//     let patAge = today.getFullYear() - birthDate.getFullYear();
//     const monthDif = today.getMonth() - birthDate.getMonth();
//     if (monthDif < 0 || (monthDif === 0 && today.getDate() < birthDate.getDate())) {
//       patAge--;
//     }

//     expect(res.json).toHaveBeenCalledWith({
//       patName: mockPatient.name,
//       patAge,
//       patAddress: mockPatient.address
//     });
//   });

//   test('should return 404 status with error message when patient is not found', async () => {
//     const req = {
//       query: {
//         email: 'nonexistent@example.com' // Nonexistent patient email
//       }
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     };

//     userModel.findOne.mockResolvedValue(null);

//     await getPatientData(req, res);

//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Patient not found' });
//   });

//   test('should return 500 status with error message when an error occurs', async () => {
//     const req = {
//       query: {
//         email: 'patient@example.com' // Sample patient email
//       }
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     };

//     const errorMessage = 'Internal server error';
//     userModel.findOne.mockRejectedValue(new Error(errorMessage));

//     await getPatientData(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
//   });
// });
