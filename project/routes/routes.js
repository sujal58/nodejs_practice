const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");

routes.get("/", controller.indexRender);

routes.get("/Gallery", controller.galleryRender);

routes.get("/Signup", controller.formRender);

routes.get("/signup/get", (req, res) => {
  console.log(req.query);
});

routes.get("/table", controller.getInformation);

//routes.get("/get", controller.getInformation);

module.exports = routes;
