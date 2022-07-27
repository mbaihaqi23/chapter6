const userService = require("./user.service")

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers()
    res.json(users)
}

const getUser = async (req, res) => {
    const { username } = req.params;
    const user = await userService.getUser(username);
    //console.log(req.params)
    res.json(user)
}




const addUser = async (req, res) =>  {
    // const userAttributes = {
    //     username: req.body.username,
    // }
    // const isExist = await userService.getUser(userAttributes.username)
    // if(!isExist) {
    //     const newUser = await userService.addUser(userAttributes)
    //     console.log(newUser.username)
    //     res.json(newUser);  
    // } else {
    //     res.json('user is already exist')
    // }
    try {
        const { username, password } = req.body;
        const exist = await userService.getUser(username);
        if (!exist) {
          const newUser = await userService.addUser(username, password);
          res.json(newUser);
        } else {
          res.json("Data dengan username yang sama sudah ada");
        }
      } catch (error) {
        res.json(error.message);
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
    const deleteUser = await userService.deleteUser(id)
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
