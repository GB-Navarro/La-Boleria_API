import { Router } from "express";
import ordersController from "../../controllers/ordersController/index.js";
import { validateInsertOrderSchema, checksCakeAndClientExistence, validateDataType} from "../../middlewares/ordersMiddlewares.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateInsertOrderSchema, validateDataType ,checksCakeAndClientExistence, ordersController.insertOrder);

export default ordersRouter;

