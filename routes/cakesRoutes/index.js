import { Router } from "express";
import cakesController from "../../controllers/cakesController/index.js";
import { validateInsertCakeSchema, verifyCakeNameValidity } from "../../middlewares/middlewares.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateInsertCakeSchema, verifyCakeNameValidity, cakesController.insertCake);

export default cakesRouter;

