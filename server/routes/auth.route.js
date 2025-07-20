import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';


const authRoutes = express.Router();

//create a new user
authRoutes.post('/signup', signup);

// sign in
authRoutes.post('/signin', signin);

//google auth
authRoutes.post('/google', signup);

export default authRoutes;
