const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log(" Mongodb connection successful");
  })
  .catch(() => {
    console.log("connection failed");
  });