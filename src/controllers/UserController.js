const User = require('../models/User')

const allUsers = async (req,res)=>{
    const users = await User.findAll({
        raw:true
    }).catch(error => console.log(error))

    await res.render('home', {users})
}

const userForm = async (req,res)=>{
    await res.render('create')
}

const saveUser = async (req,res)=>{
    const { name, email, telephone } = await req.body 

    const user = await User.create({
        name, email, telephone 
    }).catch(error => console.log(error))

    console.log("create " + user)

    await res.redirect('/')
}

const editUser = async (req,res)=>{
    const { id } = req.params 
/*
    const user = User.findOne({
        where:{ id:id },
        raw:true 
    }).catch(error => console.log(error)) 

    // console.log(user.toJSON())

    // await res.render('edit', {user})
    res.json(user)
*/
    User.findOne({where: {id:id}, raw:true})
        .then(function (user) {
            res.render('edit', {user})
        })
        .catch(error => console.log(error))     
}

const updateUser = async (req,res)=>{
    const {id} = await req.params 

    const data = req.body 

    const selector = {where:{id:id}}

    await User.update(data, selector).catch(error => console.log(error))

    await res.redirect('/')
}

module.exports = {
    allUsers, userForm, saveUser, editUser, updateUser
}