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

api.settings({
    baseUrl: 'https://disease.sh'
});

// ==========
// APP ROUTES
// ==========
app.get("/", (req, res) => {
    api.all().then(function(allData) {
        api.countries({sort:'cases'}).then(function(countries) {
            res.render("index", {allData: allData, countries: countries});
        });
    });
});

// ERROR ROUTE (redirect user back to homepage)
app.get("*", (req, res) => {
    res.redirect("/");
});

// ==============
// SERVER STARTUP
// ==============
app.listen(3000, (req, res) => {
    console.log("server is running...")
});