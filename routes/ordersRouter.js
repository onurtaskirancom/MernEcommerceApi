import exppress from 'express';
import {
  createOrderCtrl,
  getAllordersCtrl,
  getSingleOrderCtrl,
  updateOrderCtrl,
  getSalesSumCtrl,
} from '../controllers/orderCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const orderRouter = exppress.Router();

orderRouter.post('/', isLoggedIn, createOrderCtrl);
orderRouter.get('/', isLoggedIn, getAllordersCtrl);
orderRouter.get('/sales/sum', isLoggedIn, getSalesSumCtrl);
orderRouter.put('/update/:id', isLoggedIn, updateOrderCtrl);
orderRouter.get('/:id', isLoggedIn, getSingleOrderCtrl);

export default orderRouter;
