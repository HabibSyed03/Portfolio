var express = require("express"),
    expressLayouts = require('express-ejs-layouts'),
    app = express()

app.use(expressLayouts)
app.set('layout', './layout/layout')
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Routes
var indexRoutes = require("./routes/index.js");

app.use("/", indexRoutes);

app.listen(process.env.PORT || 80, function(){
    console.log("Server has started");
})