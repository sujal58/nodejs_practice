const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "college",
});

let sql = "select * from students";

connection
  .query(sql)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
