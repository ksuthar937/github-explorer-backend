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
      success: true,
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
      success: true,
      mutuals,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deletelUser = async (req, res) => {
  try {
    const username = req.params.username;
    const existUser = await userService.findUser(username);
    if (!existUser) {
      throw new Error("User doesn't exist in database");
    }
    const user = await userService.deletelUser(username);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const username = req.params.username;
    const existUser = await userService.findUser(username);

    if (!existUser) {
      throw new Error("User doesn't exist in database");
    }
    const updatedData = req.body;

    const user = await userService.updateUser(username, updatedData);

    res.status(202).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const listUsers = async (req, res) => {
  try {
    const users = await userService.listUsers();

    res.status(200).json({
      success: true,
      length: users.length,
      users,
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
  deletelUser,
  updateUser,
  listUsers,
};
