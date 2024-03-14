const mongoose = require("mongoose");
require("dotenv").config();

// Database connection URL
const dbUrl = process.env.DB_KEY;
console.log(dbUrl);

// Connect to the database
const connectToMongo = () => {
  mongoose.connect(dbUrl);

  mongoose.connection.on("connected", () => {
    console.log("Connected to the database");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Database connection error 789:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from the database 987");
  });
};

module.exports = { connectToMongo };
