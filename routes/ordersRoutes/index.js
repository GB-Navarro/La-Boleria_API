import { Router } from "express";
import ordersController from "../../controllers/ordersController/index.js";
import { validateInsertOrderSchema } from "../../middlewares/ordersMiddlewares.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateInsertOrderSchema, ordersController.insertOrder);

export default ordersRouter;

