const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_data",
});

db.connect((err) => {
  if (err) {
    console.log("Cannot connect to database", err);
    return;
  }
  console.log("Database connected");
});

module.exports = db;
