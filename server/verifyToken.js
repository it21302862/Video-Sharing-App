import jwt from 'jsonwebtoken';
import {createError} from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.aacess_token || req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return next({ status: 401, message: 'You are not authenticated!' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, 'Token is not valid!'));
    }
    req.user = user;
    next();
  });
}