const userService = require("../Services/userService");

const saveUser = async (req, res) => {
  try {
    const username = req.params.username;
    const existUser = await userService.findUser(username);
    if (existUser) {
      throw new Error("User already exist in database");
    }
    const getGitUser = await userService.getUserFromAPI(username);
    const storeUser = await userService.storeUser(getGitUser);
    res.status(200).json({
      user: storeUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchUserByQuery = async (req, res) => {
  try {
    const searchData = req.query;
    const user = await userService.getUserFromDB(searchData);
    res.status(200).json({
      succes: true,
      length: user.length,
      users: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const mutualUsers = async (req, res) => {
  try {
    const username = req.params.username;

    const existUser = await userService.findUser(username);
    if (!existUser) {
      throw new Error("User doesn't exist in database");
    }

    const userId = existUser._id.valueOf();

    const mutuals = await userService.getMutualUsers(username, userId);

    res.status(200).json({
      succes: true,
      mutuals,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveUser,
  searchUserByQuery,
  mutualUsers,
};
