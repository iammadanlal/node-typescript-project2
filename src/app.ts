require("dotenv").config();
import express from "express";
import config from 'config';
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";

const app = express();

const port = config.get<number>("port");

app.listen(port, ()=> {
    log.info(`Server running on port localhost:${port}`);
    connectToDb();
})
