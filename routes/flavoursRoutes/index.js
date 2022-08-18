import { Router } from "express";
import flavoursController from "../../controllers/flavoursController/index.js";
import { validateInsertFlavourData } from "../../middlewares/flavoursMiddlewares.js";

const flavoursRouter = Router();

flavoursRouter.post("/flavours", validateInsertFlavourData , flavoursController.insertFlavour);

export default flavoursRouter;

