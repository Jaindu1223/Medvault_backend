const { registerDoctor, loginDoctor } = require('../controller/doctor.controller'); // Replace with the path to your controller file
const doctorModel = require('../model/doctor.model'); // Replace with the path to your doctor model file

jest.mock('../model/doctor.model'); // Mock the doctor model module


describe('registerDoctor', () => {
  test('should register a new doctor', async () => {
    const req = {
      body: {
        name: 'John Doe',
        address: '123 Main St',
        email: 'john@example.com',
        phonenumber: '1234567890',
        NIC: '123456789V',
        SLMCregiNo: '12345',
        speciality: 'Cardiology',
        password: 'password123'
      }
    };

    const res = {
      json: jest.fn()
    };

    doctorModel.findOne.mockResolvedValue(null); // Mock doctorModel.findOne to return null (user doesn't exist)
    doctorModel.prototype.save.mockResolvedValue(); // Mock save function

    await registerDoctor(req, res);

    expect(res.json).toHaveBeenCalledWith({ status: true, success: 'User Created Successfully' });
  });

  test('should not register an existing doctor', async () => {
    const req = {
      body: {
        // Same as above
      }
    };

    const res = {
      json: jest.fn()
    };

    doctorModel.findOne.mockResolvedValue({}); // Mock doctorModel.findOne to return a user (user exists)

    await registerDoctor(req, res);

    expect(res.json).toHaveBeenCalledWith({ status: false, success: 'User Exist' });
  });
});

describe('loginDoctor', () => {
  test('should login a doctor with valid credentials', async () => {
    const req = {
      body: {
        email: 'john@example.com',
        password: 'password123'
      }
    };

    const res = {
      json: jest.fn()
    };

    doctorModel.findOne.mockResolvedValue({}); // Mock doctorModel.findOne to return a user (valid credentials)

    await loginDoctor(req, res);

    expect(res.json).toHaveBeenCalledWith({ status: true, success: {} });
  });

  test('should not login a doctor with invalid credentials', async () => {
    const req = {
      body: {
        email: 'john@example.com',
        password: 'invalidpassword'
      }
    };

    const res = {
      json: jest.fn()
    };

    doctorModel.findOne.mockResolvedValue(null); // Mock doctorModel.findOne to return null (invalid credentials)

    await loginDoctor(req, res);

    expect(res.json).toHaveBeenCalledWith({ status: false, success: 'User Invalid. Please Try Again' });
  });
});
