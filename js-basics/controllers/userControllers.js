const users = require ('../data/users.js')

const getUsers = (req, res)=>{
    res.json({
        message:'user found',
        users: users
    })
}

module.exports= {getUsers}