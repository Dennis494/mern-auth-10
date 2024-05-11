import express from 'express';
import { signup } from '../controllers/auth.controller.js';//do not forget to always add .js at the end

//create the router
const router = express.Router();//using uppercase Router

//create the first method
router.post("/signup", signup)

//export the router so it can be used outside this file
export default router;