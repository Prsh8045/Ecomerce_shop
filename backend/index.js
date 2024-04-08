require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

require("./db/conn");
const app = express();
const userData = require("./models/schema");

const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(require("./router/auth"));

app.listen(port, () => {
  console.log(`app is listing on port  ${port}`);
});