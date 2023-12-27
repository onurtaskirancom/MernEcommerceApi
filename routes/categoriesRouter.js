import exppress from 'express';

import { createCategoryCtrl } from '../controllers/categoriesCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const categoriesRouter = exppress.Router();

categoriesRouter.post('/', isLoggedIn, createCategoryCtrl);


export default categoriesRouter;
