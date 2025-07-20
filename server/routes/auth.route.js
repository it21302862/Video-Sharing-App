import express from 'express';
import { signin, signup, googleAuth } from '../controllers/auth.controller.js';


const authRoutes = express.Router();

//create a new user
authRoutes.post('/signup', signup);

// sign in
authRoutes.post('/signin', signin);

//google auth
authRoutes.post('/google', googleAuth);

export default authRoutes;
