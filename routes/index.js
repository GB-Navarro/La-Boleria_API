import express from "express";
import cakesRouter from "./cakesRoutes/index.js";

const router = express.Router();

router.use(cakesRouter);

export default router;