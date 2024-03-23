const userService = require("../Services/userService");

const saveUser = async (req, res) => {
  try {
    const username = req.params.username;
    const existUser = await userService.findUser(username);
    if (existUser) {
      throw new Error("User already exist in database");
    }
    const getGitUser = await userService.getUser(username);
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

module.exports = {
  saveUser,
};
