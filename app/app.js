import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnect from '../config/dbConnect.js';
import categoriesRouter from '../routes/categoriesRouter.js';
import colorRouter from '../routes/colorRouter.js';
import productsRouter from '../routes/productsRoute.js';
import userRoutes from '../routes/usersRoute.js';
import { globalErrhandler, notFound } from '../middlewares/globalErrHandler.js';
import brandsRouter from '../routes/brandsRouter.js';

//db connect
dbConnect();
const app = express();

//pass incoming data
app.use(express.json());

//routes
app.use('/api/v1/users/', userRoutes);
app.use('/api/v1/products/', productsRouter);
app.use('/api/v1/categories/', categoriesRouter);
app.use('/api/v1/brands/', brandsRouter);
app.use('/api/v1/colors/', colorRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

export default app;
