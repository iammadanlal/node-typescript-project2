require("dotenv").config();
import express from "express";
import config from 'config';
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";

const app = express();

// global config
app.use(express.json());

// router
app.use(router)

const port = config.get<number>("port");

app.listen(port, ()=> {
    connectToDb();
    log.info(`Server running on port localhost:${port}`);
})
