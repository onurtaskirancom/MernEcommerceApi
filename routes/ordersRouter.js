import exppress from 'express';
import { createOrderCtrl } from '../controllers/orderCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const orderRouter = exppress.Router();

orderRouter.post('/', isLoggedIn, createOrderCtrl);

export default orderRouter;
