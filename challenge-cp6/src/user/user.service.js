const userRepo = require("./user.repo")

//get all users
const getAllUsers = async (username, password) => {
    return await userRepo.getAllUsers(username, password)
}

//get one user
const getUser = async () => {
    return await userRepo.getUser()
}

//add new user
const addUser = async (username, password) => {
    return await userRepo.addUser(username, password)
}

//edit one user
const updateUser = async ({id, username, password}) => {
    return await userRepo.updateUser({id, username, password})
}

//delete one user
const deleteUser = async (id) => {
    return await userRepo.deleteUser(id)
}

const userService = {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}

module.exports = userService
