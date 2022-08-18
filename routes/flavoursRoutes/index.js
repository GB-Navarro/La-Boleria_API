import { Router } from "express";
import flavoursController from "../../controllers/flavoursController/index.js";
import { validateInsertFlavourData, checksIfFlavourExists } from "../../middlewares/flavoursMiddlewares.js";

const flavoursRouter = Router();

flavoursRouter.post("/flavours", validateInsertFlavourData , checksIfFlavourExists, flavoursController.insertFlavour);

export default flavoursRouter;

