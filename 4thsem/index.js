const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/userRoutes.js");
const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the server</h1>");
});

//userRoute middleware
//api for user

app.use("/api/user", require("./routes/userRoutes.js"));

app.listen(port, () => {
  console.log(`Server is ruuning on port:`);
  console.log(`http://localhost:${port}`);
});
