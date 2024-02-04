import exppress from 'express';
import { createCouponCtrl } from '../controllers/couponsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const couponsRouter = exppress.Router();

couponsRouter.post('/', isLoggedIn, createCouponCtrl);

export default couponsRouter;
