const users = require ('../data/users.js')


//get 
const getUsers = (req, res)=>{
    res.json({
        message:'user found',
        users: users
    })
}

//post

const addUsers = (req , res) =>{
    const{name} = req.body;

    if(!name){
        return res.status(400).json({
            message: "name is requires"
        })
    }

    const newUser = {
        id: users.length +1,
        name : name
    };

    users.push(newUser);

    res.status(200).json({
        message : " user add",
        user: newUser
    })
}

module.exports= {addUsers,getUsers}