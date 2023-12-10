const express = require("express");
const app = express();
const db = require("./db/db");
const cors = require("cors");
const port = 500;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const sql = "SELECT * FROM person_table";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    else {
      return res.json(data);
    }
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO person_table(`name`, `address`, `email`, `phone`, `DOB`) VALUES (?)";

  const value = [
    req.body.name,
    req.body.address,
    req.body.email,
    req.body.phone,
    req.body.dob,
  ];
  db.query(sql, [value], (err, data) => {
    if (err) return res.json(err);
    else {
      return res.json(data);
    }
  });
});

app.delete("/student/:id", (req, res) => {
  const sql = "DELETE FROM person_table WHERE id = ? ";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
