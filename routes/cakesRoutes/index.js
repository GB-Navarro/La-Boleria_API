import { Router } from "express";
import cakesController from "../../controllers/cakesController/index.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", cakesController.insertCake);

export default cakesRouter;

