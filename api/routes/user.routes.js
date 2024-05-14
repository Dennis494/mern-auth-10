import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';//add .js at the end because it is the backend
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

//create our router
router.get('/', test); 
router.post('/update/:id', verifyToken, updateUser)

export default router; 