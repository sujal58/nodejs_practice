const express = require("express");
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getAllUser);
router.route("/:id").get(getUserById);
router.route("/").post(createUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
