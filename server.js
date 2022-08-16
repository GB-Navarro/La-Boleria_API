import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req,res) => {
    res.send("Hello World!");
})

server.listen(process.env.PORT);

//testing deploy