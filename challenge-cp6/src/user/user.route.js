const express = require('express');
const userController = require('./user.controller');
const userRouter = express.Router();

//GET all users
userRouter.get("/user", userController.getAllUsers)

//GET user
userRouter.get("/user", userController.getUser)

//POST (add new user)
userRouter.post("/user", userController.addUser)

//POST (update one user)
userRouter.post("/user/:id", userController.updateUser)

//DELETE (delete one user)
userRouter.delete("/user/:id", userController.deleteUser)

module.exports = userRouter
