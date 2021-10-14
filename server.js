const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

const port = 3000;

app.listen(port, function () {
  console.log(`server up and running ... listening to port ${port}`);
});

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

app.get("/addData", function (req, res) {
  console.log(projectData);
  res.send(projectData);
});

// same url in postData async fn
app.post("/addData", function (req, res) {
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.feelings;
  res.send(projectData);
});
app.get("/all", function (req, res) {
    //  Data is passed correctly
  res.send(projectData);
});
// Setup Server
