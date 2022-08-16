import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js"

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.listen(process.env.PORT);