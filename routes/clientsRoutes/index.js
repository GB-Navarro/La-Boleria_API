import { Router } from "express";
import clientsController from "../../controllers/clientsController/index.js";

const clientsRouter = Router();

clientsRouter.post("/clients", clientsController.insertClient);

export default clientsRouter;

