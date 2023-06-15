const express = require("express")
const router = express.Router()
const { allUsers, userForm, saveUser, editUser, updateUser } = 
    require('../controllers/UserController')

router.get('/', allUsers)
router.get('/create', userForm)
router.post('/create', saveUser) 
router.get('/edit/:id', editUser)
router.post('/update/:id', updateUser)

/*
router.get('/',(req,res)=>{
    res.render('home')
})
*/
module.exports = router