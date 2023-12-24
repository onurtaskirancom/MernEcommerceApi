import exppress from 'express';
import {
  createProductCtrl,
  getProductsCtrl,
  getProductCtrl,
} from '../controllers/productsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const productsRouter = exppress.Router();

productsRouter.post('/', isLoggedIn, createProductCtrl);
productsRouter.get('/', getProductsCtrl);
productsRouter.get('/:id', getProductCtrl);


export default productsRouter;
