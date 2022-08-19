import { Router } from "express";
import ordersController from "../../controllers/ordersController/index.js";
import { validateInsertOrderSchema, checksCakeAndClientExistence, validateDataType, checkOrderIdExistence, validateClientId, validateOrderId } from "../../middlewares/ordersMiddlewares.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateInsertOrderSchema, validateDataType ,checksCakeAndClientExistence, ordersController.insertOrder);
ordersRouter.get("/orders", ordersController.getOrders);
ordersRouter.get("/orders/:id", checkOrderIdExistence , ordersController.getOrderById);
ordersRouter.get("/clients/:id/orders", validateClientId ,ordersController.getOrdersByClientId);
ordersRouter.patch("/order/:id", validateOrderId, checkOrderIdExistence, ordersController.changeDeliveryStatus);

export default ordersRouter;

