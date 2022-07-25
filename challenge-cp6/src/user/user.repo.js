const { user_game } = require("../database/models")

//get all user
const getAllUsers = async () => {
    return await user_game.findAll()
}

//get one user
const getUser = async (q) => {
    return await user_game.findAll({
        where: {
            username: q
        }
    })
}

//add new user
const addUser = async (p) => {
    return await user_game.create({
        username: p.username,
        password: p.password
    })
}

//edit one user
const updateUser = async ({id, username, password}) => {
    return await user_game.update(
    {
        username,
        password,
    },
    {
        where: {
            id: id
        },
        returning: true,
    }
    )
}

//delete one user
const deleteUser = async (id) => {
    return await user_game.destroy({
        where: {
            id: id
        }
    })
}



const userRepo = {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}

module.exports = userRepo
