const express = require('express');
const app = express();
const path = require('path');
const mainRoute = require('./routes/app');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use('/',mainRoute);

// Export the app as a Vercel-compatible handler
module.exports = app;
