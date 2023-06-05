//const express = require('express');
import express from "express";
import configViewEngine from "./configs/viewEngine";
import intWebRouter from "./route/web";
import connection from "./configs/connectDB";

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
//setup view engine
configViewEngine(app);
//init web router
intWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})