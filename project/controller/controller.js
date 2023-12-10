const { query } = require("express");
const db = require("../db/db");
const { stringify } = require("querystring");

//rendering index page
function indexRender(req, res) {
  res.render("index");
}

//gallery

function galleryRender(req, res) {
  res.render("gallery");
}

//rendering form page
function formRender(req, res) {
  res.render("signup");
}

//table
function tableRender(req, res) {
  res.render("table");
}

//default for rendering backend data
function getInformation(req, res) {
  db.query("select * from person_table", (err, result) => {
    if (err) {
      return console.log(err);
    }
    //res.json({ success: true, data: result });
    res.render("table", { data: result });
  });
}

module.exports = {
  getInformation,
  formRender,
  indexRender,
  galleryRender,
  tableRender,
};
