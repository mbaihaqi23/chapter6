const userService = require("./user.service")

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers()
    res.json(users)
}

const getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userService.getUsername(username)
        res.json(user)
      } catch (error) {}
    };


const addUser = async (req, res) =>  {
    try {
        const { username, password } = req.body;
        const exist = await userService.getUser(username)
        if (!exist) {
          const newUser = await userService.addUser(username, password)
          res.json(newUser)
        } else {
          res.json("Data dengan username yang sama sudah ada");
        }
      } catch (error) {
        res.json(error.message)
      }
}


const updateUser = async (req, res) => {
    const { id } = req.params
    const { username, password } = req.body
    const updateUser = await userService.updateUser({id, username, password})
    console.log(id, username)
    res.json(updateUser)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await userService.deleteUser(id)
    res.json({
        id: id,
        status: "deleted"
    })
}

const userController = {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}

module.exports = userController
