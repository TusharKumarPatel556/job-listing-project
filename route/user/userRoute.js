const express = require("express");
const {
  UserRegisterController,
  UserLoginController,
} = require("../../controllers/users/usersController");

const UserRoutes = express.Router();

UserRoutes.post("/register", UserRegisterController);
UserRoutes.get("/login", UserLoginController);

module.exports = UserRoutes;
