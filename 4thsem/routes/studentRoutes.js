const express = require("express");
const {
  getAllStudent,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.route("/").get(getAllStudent);
router.route("/:id").get(getStudentById);
router.route("/").get(createStudent);
router.route("/:id").get(updateStudent);
router.route("/:id").get(deleteStudent);

module.exports = router;
