import exppress from 'express';
import { createProductCtrl } from '../controllers/productsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const productsRouter = exppress.Router();

productsRouter.post('/', isLoggedIn, createProductCtrl);

export default productsRouter;
