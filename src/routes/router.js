
const express = require("express");
const UserController = require("../controllers/user.controller");
const userController = require("../controllers/user.controller");

const routes = express.Router();


routes.get('/users',userController.getUser);

module.exports = routes;