import { Router } from "express";
import flavoursController from "../../controllers/flavoursController/index.js";

const flavoursRouter = Router();

flavoursRouter.post("/flavours", flavoursController.insertFlavour);

export default flavoursRouter;

