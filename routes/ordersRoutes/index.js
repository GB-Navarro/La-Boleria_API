import { Router } from "express";
import ordersController from "../../controllers/ordersController/index.js";
import { validateInsertOrderSchema, checksCakeAndClientExistence, validateDataType, checkOrderIdExistence } from "../../middlewares/ordersMiddlewares.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateInsertOrderSchema, validateDataType ,checksCakeAndClientExistence, ordersController.insertOrder);
ordersRouter.get("/orders", ordersController.getOrders);
ordersRouter.get("/orders/:id", checkOrderIdExistence , ordersController.getOrderById);
ordersRouter.get("/clients/:id/orders",  ordersController.getOrdersByClientId);

export default ordersRouter;

