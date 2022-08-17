import { Router } from "express";
import cakesController from "../../controllers/cakesController/index.js";
import { validateInsertCakeSchema } from "../../middlewares/middlewares.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateInsertCakeSchema, cakesController.insertCake);

export default cakesRouter;

