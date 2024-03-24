const mogoose = require("mongoose");

const userSchema = new mogoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  id: {
    type: Number,
    unique: true,
  },
  avatar_url: {
    type: String,
  },
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  blog: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  public_repos: {
    type: Number,
  },
  followers: {
    type: Number,
  },
  following: {
    type: Number,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  friends: {
    type: Array,
  },
});
const User = mogoose.model("Users", userSchema);

module.exports = { User };
