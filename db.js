const Sequlize = require('sequelize')
const db = new Sequlize('ums','root','036369432',{
    host:'8.222.206.50',
    dialect:'mysql'
})

module.exports = db
