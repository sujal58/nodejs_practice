const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");
const routes = require("../routes/routes");
const db = require("../db/db");
const port = 6600;

const expresshbs = hbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "../views/layouts"),
  defaultLayout: "main",
  partialsDir: path.join(__dirname, "../views/partials"),
});

app.engine("hbs", expresshbs.engine);
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "../public/")));
app.use("/", routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
