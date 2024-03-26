const { default: axios } = require("axios");
const { User } = require("../Models/Users");

const findUser = async (username) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserFromAPI = async (username) => {
  try {
    const gitUser = await axios(`https://api.github.com/users/${username}`);
    const data = gitUser?.data;
    return data;
  } catch (error) {
    throw new Error(
      "This username doesn't exist in GitHub! Please provide correct username"
    );
  }
};

const storeUser = async (getGitUser) => {
  try {
    const {
      login,
      id,
      avatar_url,
      type,
      name,
      company,
      blog,
      location,
      email,
      bio,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,
    } = getGitUser;

    const crateUser = new User({
      username: login,
      id,
      avatar_url,
      type,
      name,
      company,
      blog,
      location,
      email,
      bio,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,
    });

    await crateUser.save();
    return crateUser;
  } catch (error) {
    throw error;
  }
};

const getUserFromDB = async (searchData) => {
  try {
    const user = await User.find(searchData);
    return user;
  } catch (error) {
    throw error;
  }
};

const getMutualUsers = async (username, userId) => {
  try {
    const getFollowers = await axios.get(
      `https://api.github.com/users/${username}/followers`
    );

    const getFollowing = await axios.get(
      `https://api.github.com/users/${username}/following`
    );

    const followers = getFollowers.data.map((el) => el.login);
    const following = getFollowing.data.map((el) => el.login);

    const mutualUsers = followers.filter((user) => following.includes(user));

    if (mutualUsers.length === 0) {
      throw new Error("User don't have any mutuals");
    }

    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { friends: mutualUsers } },
      { new: true }
    );

    return user;
  } catch (error) {
    throw error;
  }
};

const deletelUser = async (username) => {
  try {
    const user = await User.findOneAndUpdate(
      { username },
      { $set: { isDeleted: true } },
      { new: true }
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (username, updatedData) => {
  try {
    const user = await User.findOneAndUpdate(
      { username },
      { $set: updatedData },
      { new: true }
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const listUsers = async (sortType, sortOrder) => {
  try {
    const users = await User.find({});
    if (!users || users.length === 0) {
      throw new Error("No users found");
    }
    return users.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortType] - b[sortType];
      } else {
        return b[sortType] - a[sortType];
      }
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserFromAPI,
  storeUser,
  findUser,
  getUserFromDB,
  getMutualUsers,
  deletelUser,
  updateUser,
  listUsers,
};
