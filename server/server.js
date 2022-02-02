const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const config = require("config");

const CustomError = require("./models/custom-error");

const app = express();

// parse the body of incoming request
app.use(bodyParser.json());

// CORS
app.use(cors());

// app.use() is used for routing through a middleware function
app.use("/api/trips", require("./routes/trips"));
app.use("/api/users", require("./routes/users"));



// Handle unsuported routes
app.use(() => {
  throw new CustomError("Page not Found", 404);
});

// Special error handling middleware prvided by express
app.use((error, req, res, next) => {
  // to check if a reponse is somehow sent already.
  // this helper func helps in avoiding double sending a response.
  if (res.headerSent) {
    return next(error);
  }

  // responses can also be chained together
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred" });
});

// Connection to MongoDB
const mongoURI = config.get("mongo_URI");
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log("connection with DB failed!");
    console.log(err.message);
    process.exit(1);
  }
};
connectDB();

app.listen(5000);
