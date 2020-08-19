// ===============================
//  REQUIRE ALL NECESSARY PACKAGES
// ===============================
const express = require("express"),
app           = express(),
api           = require('novelcovid');

// =========
// APP SETUP
// =========
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ==========
// APP ROUTES
// ==========
app.get("/", (req, res) => {
    api.all().then(function(allData) {
        res.render("index", {allData: allData});
    });
});

app.get("*", (req, res) => {
    res.redirect("/");
});

// ==============
// SERVER STARTUP
// ==============
app.listen(3000, (req, res) => {
    console.log("server is running...")
});