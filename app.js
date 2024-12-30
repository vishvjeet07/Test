const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

// Export the app as a Vercel-compatible handler
module.exports = app;
