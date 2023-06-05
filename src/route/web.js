import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();
const intWebRouter = (app) => {
    router.get('/', homeController.getHomepage)
    //router.get('/user', homeController.getUsers)
    router.get('/me', (req, res) => {
        res.send('My Name is Lenh')
    })

    return app.use('/', router);
}
module.exports = intWebRouter;