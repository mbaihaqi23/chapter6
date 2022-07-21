const { User } = require("../database/models")

const getAllUsers = async() => {
    return await User.findAll();
};

const userRepo = {
    getAllusers,
};

module.exports = userRepo;