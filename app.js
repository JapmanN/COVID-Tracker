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

// ==========
// APP ROUTES
// ==========
app.get("/", (req, res) => {
    res.render("index");
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