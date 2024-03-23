const { registerUser, loginUser } = require('../controller/patient.controller');
const userModel = require('../model/user.model');

jest.mock('../model/user.model');

describe('User Controller', () => {
  describe('registerUser', () => {
    test('should register a new user successfully', async () => {
      const req = {
        body: {
          name: 'John Doe',
          birthdate: '1990-01-01',
          address: '123 Main St',
          email: 'john@example.com',
          phonenumber: '1234567890',
          NIC: '123456789V',
          password: 'password123'
        }
      };

      const res = {
        json: jest.fn()
      };

      userModel.findOne.mockResolvedValue(null);
      userModel.prototype.save.mockResolvedValue();

      await registerUser(req, res);

      expect(userModel.findOne).toHaveBeenCalledWith({ NIC: '123456789V' });
      expect(userModel.prototype.save).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ status: true, success: 'User Created Successfully' });
    });

    test('should return user exists if user already registered', async () => {
      const req = {
        body: {
          NIC: '123456789V'
        }
      };

      const res = {
        json: jest.fn()
      };

      userModel.findOne.mockResolvedValue({});

      await registerUser(req, res);

      expect(res.json).toHaveBeenCalledWith({ status: false, success: 'User Exist' });
    });
  });

  describe('loginUser', () => {
    test('should login user successfully', async () => {
      const req = {
        body: {
          email: 'john@example.com',
          password: 'password123'
        }
      };

      const res = {
        json: jest.fn()
      };

      userModel.findOne.mockResolvedValue({ email: 'john@example.com', password: 'password123' });

      await loginUser(req, res);

      expect(res.json).toHaveBeenCalledWith({ status: true, success: { email: 'john@example.com', password: 'password123' } });
    });

    test('should return user invalid message if login fails', async () => {
      const req = {
        body: {
          email: 'john@example.com',
          password: 'invalidpassword'
        }
      };

      const res = {
        json: jest.fn()
      };

      userModel.findOne.mockResolvedValue(null);

      await loginUser(req, res);

      expect(res.json).toHaveBeenCalledWith({ status: false, success: 'User Invalid. Please Try Again' });
    });
  });
});
