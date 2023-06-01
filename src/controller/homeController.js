//import lib
import { Router } from "express";
import connection from "../configs/connectDB";

let getHomepage = (req, res) => {
    //let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('Connecting to DB ....');
            console.log(results); // results contains rows returned by server
            //data = results;
            return res.render('index.ejs', { datausers: results })
        }
    );
    //console.log('Here is your Data ....', data.FirstName);
}
module.exports = {
    getHomepage
}