// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app
const express = require('express');
const app = express();
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 3000;
// Initialize the main project folder

// Spin up the server
// Callback to debug

app.listen(port, function () {
    console.log(`server up and running ... listening to port ${port}`);
});

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route


  