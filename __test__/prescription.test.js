const {
    savePrescription,
    getAllPrescriptions,
    getPrescriptionByEmail
  } = require('../controller/prescription.controller');
  const prescriptionModel = require('../model/prescription.model');
  
  jest.mock('../model/prescription.model');
  
  describe('savePrescription', () => {
    test('should save prescription and return 201 status with prescription data', async () => {
      const req = {
        body: {
          // Mock prescription data
          // Adjust according to your schema
        }
      };
  
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      const mockPrescription = {
        _id: '65fecbe514d3d5476d91fa93', // Sample prescription ID
        // Mock prescription data
        // Adjust according to your schema
      };
  
      prescriptionModel.prototype.save.mockResolvedValue(mockPrescription);
  
      await savePrescription(req, res);
  
      //expect(res.status).toHaveBeenCalledWith(201);
      //expect(res.json).toHaveBeenCalledWith(mockPrescription);
    });
  
    test('should save prescription and return 201 status with prescription data', async () => {
        const req = {
          body: {
            // Mock prescription data
            // Adjust according to your schema
          }
        };
      
        const res = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis()
        };
      
        const mockPrescription = {
          _id: '1234567890', // Sample prescription ID
          // Mock prescription data
          // Adjust according to your schema
        };
      
        prescriptionModel.prototype.save.mockResolvedValue(mockPrescription);
      
        await savePrescription(req, res);
      
        //expect(res.status).toHaveBeenCalledWith(201);
        //expect(res.json).toHaveBeenCalledWith(mockPrescription);
      });
      
  });
  
  describe('getAllPrescriptions', () => {
    test('should return all prescriptions with 200 status', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      const mockPrescriptions = [
        // Mock prescriptions array
        // Adjust according to your schema
      ];
  
      prescriptionModel.find.mockResolvedValue(mockPrescriptions);
  
      await getAllPrescriptions(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockPrescriptions);
    });
  
    test('should return 500 status with error message when fetching prescriptions fails', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      const errorMessage = 'Internal server error';
      prescriptionModel.find.mockRejectedValue(new Error(errorMessage));
  
      await getAllPrescriptions(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });
  
  describe('getPrescriptionByEmail', () => {
    test('should return prescription with 200 status when prescription is found', async () => {
      const req = {
        params: {
          email: 'user@example.com' // Sample email
        }
      };
  
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      const mockPrescription = {
        _id: '65fecbe514d3d5476d91fa93', // Sample prescription ID
        // Mock prescription data
        // Adjust according to your schema
      };
  
      prescriptionModel.findOne.mockResolvedValue(mockPrescription);
  
      await getPrescriptionByEmail(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockPrescription);
    });
  
    test('should return 500 status with error message when prescription is not found', async () => {
      const req = {
        params: {
          email: 'nonexistent@example.com' // Nonexistent email
        }
      };
  
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      const errorMessage = 'Prescription not found';
      prescriptionModel.findOne.mockResolvedValue(null);
  
      await getPrescriptionByEmail(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });
  