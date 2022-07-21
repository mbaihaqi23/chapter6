const express = require('express');
const userService = require('./user.service');
const userRouter = express.Router();


userRouter.get('/users', async (req, res) => {
    const users = await userService.getAllUsers();
    res.json (users);
});


module.exports= userRouter;