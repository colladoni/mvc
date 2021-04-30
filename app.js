const express = require("express");
const app = express();
const accountRoutes = require("./routes/accountRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extrended : true}))
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.use("/static", express.static("public"));

//routes
app.use("/accountz",accountRoutes);

app.listen(3000);