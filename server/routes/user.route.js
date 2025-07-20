import express from 'express';
import { updateUser,deleteUser, getUser, subscribeUser, unsubscribeUser, like, dislike  } from '../controllers/user.controller.js';
import { verifyToken } from '../verifyToken.js';


const userRoutes = express.Router();

//update user
userRoutes.put('/:id', verifyToken, updateUser);

//delete user
userRoutes.delete('/:id', verifyToken, deleteUser);

// get user 
userRoutes.get('/find/:id', getUser);

//subscribe a user
userRoutes.put('/sub/:id', verifyToken, subscribeUser);

//unsubscribe a user
userRoutes.put('/unsub/:id', verifyToken, unsubscribeUser);

//like a video
userRoutes.put('/like/:videoId', verifyToken, like);

//dislike a video
userRoutes.put('/dislike/:videoId', verifyToken, dislike);

export default userRoutes;
