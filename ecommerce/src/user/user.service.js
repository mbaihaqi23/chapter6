const userRepo = require("./user.repo");

const getAllUsers = async () => {
    return await userRepo.getAllusers();
};


const userService = {
    getAllUsers,
}

module.exports = userService;