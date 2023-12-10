const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_data",
});

db.connect((err) => {
  if (err) return console.log("Error Occured:", err);
  else {
    console.log("Database connecetd successfully");
  }
});

module.exports = db;
