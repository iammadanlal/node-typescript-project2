require("dotenv").config();
import express from "express";
import config from 'config';
import connectToDb from "./utils/connectToDb";

const app = express();

const port = config.get<number>("port");

app.listen(port, ()=> {
    console.log(`Server running on port localhost:${port}`);
    connectToDb();
})
