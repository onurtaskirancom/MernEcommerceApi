import exppress from 'express';
import {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
} from '../controllers/usersCtrl.js';


const userRoutes = exppress.Router();

userRoutes.post('/register', registerUserCtrl);
userRoutes.post('/login', loginUserCtrl);
userRoutes.get('/profile', getUserProfileCtrl);

export default userRoutes;