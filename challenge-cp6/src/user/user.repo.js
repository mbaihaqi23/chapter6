const { user_game } = require("../database/models")

//get all user
const getAllUsers = async () => {
    return await user_game.findAll()
}

//get one user
const getUser = async (username) => {
    return await user_game.findOne({
        where: {
            username: username,
        }
    })
}

//add new user
const addUser = async (username,password) => {
    return await user_game.create({
      username : username,
      password : password,
    });
  };

//edit one user
const updateUser = async ({id, username, password}) => {
    return await user_game.update(
    {
        username : username,
        password : username,
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
