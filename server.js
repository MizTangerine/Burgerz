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

// ***Start Server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));