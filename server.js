// ***Require Depencencies
const express = require('express');
const exphbs = require("express-handlebars");

// ***Setup Express
const app = express();
const PORT = process.env.PORT || 5050;

// ***body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ***Static Directory
app.use(express.static('public'));

// Initialize & setup handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// ***Import Routes
const routes = require('./controllers/burgers_controller.js');
app.use(routes);

// ***Start Server
app.listen(PORT, () => console.log("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));