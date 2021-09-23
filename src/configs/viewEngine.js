import express from "express";

const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;
