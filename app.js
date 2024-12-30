const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('index');
});

// Export the app as a Vercel-compatible handler
module.exports = app;
