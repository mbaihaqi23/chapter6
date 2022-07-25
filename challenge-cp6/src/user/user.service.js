const userRepo = require("./user.repo")

//get all users
const getAllUsers = async () => {
    return await userRepo.getAllUsers()
}

//get one user
const getUser = async (q) => {
    return await userRepo.getUser(q)
}

//add new user
const addUser = async (p) => {
    return await userRepo.addUser(p)
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
