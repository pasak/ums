const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const router = require('./src/routes/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.engine('hbs',engine({extname:'.hbs'}))
app.set('view engine','hbs')
app.use('/', router)
/*
app.get('/',(req,res)=>{
    res.render('home')
})
*/
app.listen(port, ()=>{
    console.log('The server is listening on port ' + port)
})