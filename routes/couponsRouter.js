import exppress from 'express';
import {
  createCouponCtrl,
  getAllCouponsCtrl,
  getCouponCtrl,
  updateCouponCtrl,
  deleteCouponCtrl,
} from '../controllers/couponsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const couponsRouter = exppress.Router();

couponsRouter.post('/', isLoggedIn, createCouponCtrl);
couponsRouter.get('/', getAllCouponsCtrl);
couponsRouter.put('/update/:id', updateCouponCtrl);
couponsRouter.delete('/delete/:id', deleteCouponCtrl);
couponsRouter.get('/id', getCouponCtrl);

export default couponsRouter;
