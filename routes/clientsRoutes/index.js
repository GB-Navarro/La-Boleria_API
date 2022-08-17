import { Router } from "express";
import clientsController from "../../controllers/clientsController/index.js";
import { validateInsertClientSchema } from "../../middlewares/clientsMiddlewares.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateInsertClientSchema, clientsController.insertClient);

export default clientsRouter;

