const express = require("express");
const router = express.Router();
const userController = require('../Controllers/userController.js')

router.post("/adduser",userController.register);
module.exports = router;