import { Router } from "express";
import cakesController from "../../controllers/cakesController/index.js";
import { validateInsertCakeSchema, validateDataType ,verifyCakeNameValidity, checksIfFlavourIdExists } from "../../middlewares/cakesMiddlewares.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateInsertCakeSchema, validateDataType, verifyCakeNameValidity, checksIfFlavourIdExists, cakesController.insertCake);

export default cakesRouter;

