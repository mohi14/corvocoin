const express = require("express");
const router = express.Router();
const inputInfoController = require("../Controllers/InputInfo.Controller");

router
  .route("/inputValue")
  .get(inputInfoController.getInputInfo)
  .post(inputInfoController.createInpuInfo );



module.exports = router;