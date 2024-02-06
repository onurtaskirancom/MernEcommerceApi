import exppress from 'express';
import {
  createCouponCtrl,
  getAllCouponsCtrl,
} from '../controllers/couponsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const couponsRouter = exppress.Router();

couponsRouter.post('/', isLoggedIn, createCouponCtrl);
couponsRouter.get('/', getAllCouponsCtrl);

export default couponsRouter;
