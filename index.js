var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const { sequelize } = require("./models");

var corsOptions = {
    origin: "http://localhost:3000/",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routes);
app.use(cookieParser());

app.get("/", function (req, res) {
    res.send("Hello World");
});

var server = app.listen(4000, async function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
    try {
        await sequelize.authenticate();
        console.log("DB Connected Successfully!");
    } catch (err) {
        console.log(err);
    }
});

process.on("SIGINT", function () {
    server.close(err => {
        if (err) console.log(err);
        console.log("\ngracefully shutting down server...");
        sequelize.close().then(() => {
            console.log("Server down.");
            process.exit(0);
        });
    });
});

process.on("SIGTERM", function () {
    server.close(err => {
        if (err) console.log(err);
        console.log("\ngracefully shutting down server...");
        sequelize.close().then(() => {
            console.log("Server down.");
            process.exit(0);
        });
    });
});
