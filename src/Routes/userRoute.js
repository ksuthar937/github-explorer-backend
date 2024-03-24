const express = require("express");

const router = express.Router();

const {
  saveUser,
  searchUserByQuery,
  mutualUsers,
} = require("../Controllers/userController");

router.get("/save-user/:username", saveUser);

router.get("/search-users", searchUserByQuery);

router.get("/find-mutual-followers/:username", mutualUsers);

module.exports = router;
