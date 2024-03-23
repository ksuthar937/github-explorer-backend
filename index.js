const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

const userRoutes = require("./src/Routes/userRoute");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/", userRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(colors.bgYellow("Database Connection Successfully"));
  })
  .catch(() => {
    console.log(colors.bgRed("Database Connection Failed"));
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(colors.bgYellow(`Server listening on PORT ${PORT}`));
});
