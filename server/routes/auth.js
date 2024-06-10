const express = require("express");
const router = express.Router();
const {
  Register,
  Login,
  getUser,
  getAllUsers,
} = require("../controllers/auth");
const { upload } = require("../multer-config");

router.route("/register").post(upload.single("image"), Register);
router.route("/user").get(getUser);
router.route("/users").get(getAllUsers);
router.route("/login").post(Login);

module.exports = router;
