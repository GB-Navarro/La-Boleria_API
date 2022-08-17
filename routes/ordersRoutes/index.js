import { Router } from "express";
import ordersController from "../../controllers/ordersController/index.js";
import { validateInsertOrderSchema, checksCakeAndClientExistence } from "../../middlewares/ordersMiddlewares.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateInsertOrderSchema, checksCakeAndClientExistence, ordersController.insertOrder);

export default ordersRouter;

