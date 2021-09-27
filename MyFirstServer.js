var http = require('http');
var a = require('../stahv.zilcha/Stahv_Zilcha_app');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hellow World");
}).listen(8080);

/*<script src="app.js"></script>*/

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "sTahvz6896",
    DB: "mysql"
};
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("./Stahv_Zilcha_app/DB/db");


// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// simple route

const path = require('path');
const publicDirectory = path.join(__dirname,'/Stahv_Zilcha_app/public');
app.use(express.static(publicDirectory));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/Stahv_Zilcha_app/views/CV.html"));
    });

app.get("/customers", function (req, res) {
    sql.query("SELECT * FROM customers", (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({ message: "error in getting all customers: " + err });
            return;
        }
        console.log("got all customers...");
        res.send(mysqlres);
        return;
    });
});

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000."
    );
});

//CV route
app.get('/app.js', function(req, res) {
    res.sendFile(path.join(__dirname, '\app.js'))
});


