const express = require("express");
const dotenv = require("dotenv").config();
const srouter = require("./routes/studentRoutes.js");
const db = require("./config/db.js");
const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the server</h1>");
});

//userRoute middleware
//api for user

app.use("/api/student", require("./routes/studentRoutes.js"));

db.query("SELECT 1")
  .then(() => {
    console.log("Database connection successfull!!");
    app.listen(port, () => {
      console.log(`Server is ruuning on port:`);
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
