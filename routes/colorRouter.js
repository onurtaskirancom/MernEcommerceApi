import exppress from 'express';
import {
  createColorCtrl,
  deleteColorCtrl,
  getAllColorsCtrl,
  getSingleColorCtrl,
  updateColorCtrl,
} from '../controllers/colorsCtrl.js';


import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const colorRouter = exppress.Router();

colorRouter.post('/', isLoggedIn,  createColorCtrl);
colorRouter.get('/', getAllColorsCtrl);
colorRouter.get('/:id', getSingleColorCtrl);
colorRouter.delete('/:id', deleteColorCtrl);
colorRouter.put('/:id', updateColorCtrl);

export default colorRouter;
