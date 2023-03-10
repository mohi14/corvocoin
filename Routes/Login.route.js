const express = require("express");
const { route } = require("../app");
const userController = require("../Controllers/Login.controller");
// const veryfyToken = require("../middleware/veryfyToken");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.get("/me", userController.getMe);

module.exports = router;