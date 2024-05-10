import express from 'express';
import { test } from '../controllers/user.controller.js';//add .js at the end because it is the backend

const router = express.Router();

//create our router
router.get('/', test); 

export default router; 