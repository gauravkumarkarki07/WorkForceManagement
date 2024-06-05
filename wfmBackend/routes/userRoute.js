import express from 'express';
import { LogoutUser } from '../controllers/userController.js';

const  router=express.Router();

router.post('/logout',LogoutUser);

export default router;