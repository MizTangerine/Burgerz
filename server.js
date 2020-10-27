// ***Require Depencencies
const express = require('express');

// ***Setup Express
const app = express();
const PORT = process.env.PORT || 5050;

// ***body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ***Static Directory
app.use(express.static('app/public'));

// ***Import Routes
const routes = require('./controllers/burgers_controller.js');
app.use(routes);

// ***Start Server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));