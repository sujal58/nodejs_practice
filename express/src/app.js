const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const hbs = require("express-handlebars");
const helperclass = require("../helper");

const username = "sujal";
const password = 123456;

const staticpath = path.join(__dirname, "../public");
const viewpath = path.join(__dirname, "../views");

// dynamic content through tempLATE engine handlebar's view engine hbs

const expressHbs = hbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "../views/layouts"),
  extname: ".hbs",
  helpers: helperclass,
  partialsDir: path.join(__dirname, "../views/partials"),
});

console.log(__dirname);

app.engine("hbs", expressHbs.engine);
app.set("view engine", "hbs");

//app.use(express.static(staticpath));
app.use("/static", express.static(path.join(__dirname, "../public/")));
const mainhbs = path.join(__dirname, "../views/layouts/main");

//data fetching to database
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("aboutus");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/form/get", (req, res) => {
  const query = req.query;
  console.log(query);
});

app.post("/form/post", (req, res) => {
  console.log("posted");
});

// app.get("/", (req, res) => {
//   const object = { name: "sujal", isValid: false };
//   const student = [
//     { name: "Ram", rollno: "1", address: "manigram" },
//     { name: "Ram", rollno: "1", address: "manigram" },
//     { name: "Ram", rollno: "1", address: "manigram" },
//     { name: "Ram", rollno: "1", address: "manigram" },
//     { name: "Ram", rollno: "1", address: "manigram" },
//     { name: "Ram", rollno: "1", address: "manigram" },
//   ];
//   res.render("index", { student: object, std: student });
// });

//-----------------passing object and using loop-----------------
app.get("/", (req, res) => {
  const shopping = [
    { name: "Potato", price: 150, increase: 10 },
    { name: "Tomato", price: 150, increase: 10 },
    { name: "Cabbage", price: 150, increase: 10 },
    { name: "Apple", price: 150, increase: 10 },
  ];
  res.render("index", { title: shopping });
});

//middleware
// app.get("/", (req, middleware res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

//check grna paro ayena yo ta

// app.get("index/:username/:password", middleware, (req, res) => {
//   res.sendFile(staticpath);
// });

//accessing username an dpassword from the url

// app.get("/get/:name", (req, res) => {
//   const value = req.params;
//   const query = req.query;

//   console.log(value);
//   console.log(query);

//   //get/sujal?rollnumber=26&address=badera
// });

// app.get("/card", (req, res) => {
//   res.sendFile(path.join(__dirname, "../viewport/cards.html"));
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact us page.");
// });

// app.get("/about", (req, res) => {
//   res.send("About us page.");
// });

// function middleware(req, res, next) {
//   // const userName = req.params.username;
//   // const passWord = req.params.password;

//   console.log(req.params);
//   if (username === "sujal" && password === 123456) {
//     return next();
//   }
//   res.send("Invalid user");
// }

app.use((req, res) => {
  res.status(404).render("Not found");
});

app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
