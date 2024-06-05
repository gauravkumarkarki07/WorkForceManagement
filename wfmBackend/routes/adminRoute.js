import express from 'express';
import { ApproveEmployee, GetAllEmployees, GetAllUsers, GetEmplpoyeeById } from '../controllers/adminController.js';

const router=express.Router();

router.put('/approveemployee/:userId',ApproveEmployee);
router.get('/getallemployees',GetAllEmployees);
router.get('/getemployeebyid/:employeeId',GetEmplpoyeeById);
router.get('/getallusers',GetAllUsers);

export default router;