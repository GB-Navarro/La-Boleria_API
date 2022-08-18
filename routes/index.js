import express from "express";
import cakesRouter from "./cakesRoutes/index.js";
import clientsRouter from "./clientsRoutes/index.js";
import ordersRouter from "./ordersRoutes/index.js";
import flavoursRouter from "./flavoursRoutes/index.js";

const router = express.Router();

router.use(cakesRouter);
router.use(clientsRouter);
router.use(ordersRouter);
router.use(flavoursRouter);

export default router;