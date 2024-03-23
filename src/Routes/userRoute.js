const express = require("express");

const router = express.Router();

const {
  saveUser,
  searchUserByQuery,
} = require("../Controllers/userController");

//GitHub User Data Storage

router.get("/save-user/:username", saveUser);

// Mutual Followers as Friends

// router.get("/find-mutual-followers/:username", mutualUser );

// Search Functionality
//GET /search-users?username=<username>&location=<location>&other_parameter=<value>&...

router.get("/search-users", searchUserByQuery);

module.exports = router;
