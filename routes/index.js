import express from "express";
import cakesRouter from "./cakesRoutes/index.js";
import clientsRouter from "./clientsRoutes/index.js";

const router = express.Router();

router.use(cakesRouter);
router.use(clientsRouter);

export default router;