import { Router } from "express";
import cakesController from "../../controllers/cakesController/index.js";
import { validateInsertCakeSchema, validateDataType ,verifyCakeNameValidity } from "../../middlewares/cakesMiddlewares.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateInsertCakeSchema, validateDataType, verifyCakeNameValidity, cakesController.insertCake);

export default cakesRouter;

