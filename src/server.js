// Importing express server
let express = require("express");
const app = express();
const MongoDBData = require("../models/model");

//convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
let projectsRoute = require("../routes/router");

// Use routes
app.use("/", projectsRoute);

//Start the server
let port = process.env.port || 3000;

//using public folder for ststic files
app.use(express.static("public"));

// The middleware converts JSON string to JavaScript object.
app.use(express.json());

//converts encoded urls to JavaScript object
app.use(express.urlencoded({ extended: false }));

//Starting and checking the server on port 3000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
