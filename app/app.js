import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import { globalErrHandler, notFound } from "../middlewares/globalErrHandler.js";
import userRouter from "../routes/usersRoute.js";
import productsRouter from "../routes/productsRoutes.js";
import categoriesRouter from "../routes/categoriesRoutes.js";
import brandsRouter from "../routes/brandRoutes.js";
import colorsRouter from "../routes/colorsRoutes.js";
import reviewsRouter from "../routes/reviewsRoutes.js";
import ordersRouter from "../routes/ordersRoutes.js";

//db connect
dbConnect();
const app = express();

//pass incoming data
app.use(express.json());

//routes
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/products/", productsRouter);
app.use("/api/v1/categories/", categoriesRouter);
app.use("/api/v1/brands/", brandsRouter);
app.use("/api/v1/colors/", colorsRouter);
app.use("/api/v1/reviews/", reviewsRouter);
app.use("/api/v1/orders/", ordersRouter);

//err middleware
app.use(notFound);
app.use(globalErrHandler);

export default app;
