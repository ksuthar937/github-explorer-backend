const express = require("express");

const router = express.Router();

const {
  saveUser,
  searchUserByQuery,
  mutualUsers,
  deletelUser,
  updateUser,
  listUsers,
} = require("../Controllers/userController");

// GitHub User Data Storage
router.get("/save-user/:username", saveUser);

// Search Functionality
router.get("/search-users", searchUserByQuery);

// Mutual Followers as Friends
router.get("/find-mutual-followers/:username", mutualUsers);

// Soft Delete User Records
router.delete("/delete-user/:username", deletelUser);

// Update User Details
router.patch("/update-user/:username", updateUser);

// List Users with Sorting
router.get("/list-users", listUsers);

module.exports = router;
