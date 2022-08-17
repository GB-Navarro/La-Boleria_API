import { Router } from "express";
import ordersController from "../../controllers/ordersController/index.js";

const ordersRouter = Router();

ordersRouter.post("/order", ordersController.insertOrder);

export default ordersRouter;

