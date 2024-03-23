const { getUserEmailById } = require('../controller/qr.controller');
const qrNicModel = require('../model/qr.model');

jest.mock('../model/qr.model');

describe('getUserEmailById', () => {
  test('should return user email when user is found', async () => {
    const req = {
      params: {
        id: '1234567890' // Sample user ID
      }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    const mockUser = {
      _id: '1234567890',
      NIC: 'user@example.com' // Sample user email
    };

    qrNicModel.findById.mockResolvedValue(mockUser);

    await getUserEmailById(req, res);

    expect(res.json).toHaveBeenCalledWith({ NIC: mockUser.NIC });
  });

  test('should return 404 status and error message when user is not found', async () => {
    const req = {
      params: {
        id: 'nonexistentid' // Nonexistent user ID
      }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    qrNicModel.findById.mockResolvedValue(null);

    await getUserEmailById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'User not found..' });
  });

  test('should return 500 status and error message when an error occurs', async () => {
    const req = {
      params: {
        id: '1234567890' // Sample user ID
      }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    const errorMessage = 'Internal server error';
    qrNicModel.findById.mockRejectedValue(new Error(errorMessage));

    await getUserEmailById(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});
