import exppress from 'express';
import {
  createOrderCtrl,
  getAllordersCtrl,
  getSingleOrderCtrl,
} from '../controllers/orderCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const orderRouter = exppress.Router();

orderRouter.post('/', isLoggedIn, createOrderCtrl);
orderRouter.get('/', isLoggedIn, getAllordersCtrl);
orderRouter.get('/:id', isLoggedIn, getSingleOrderCtrl);


export default orderRouter;
