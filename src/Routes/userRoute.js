const express = require("express");

const router = express.Router();

const { saveUser } = require("../Controllers/userController");

router.get("/save-user/:username", saveUser);

module.exports = router;
