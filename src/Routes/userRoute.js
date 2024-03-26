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

router.get("/save-user/:username", saveUser);

router.get("/search-users", searchUserByQuery);

router.get("/find-mutual-followers/:username", mutualUsers);

router.delete("/delete-user/:username", deletelUser);

router.patch("/update-user/:username", updateUser);

router.get("/list-users", listUsers);

module.exports = router;
