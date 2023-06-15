const Sequlize = require('sequelize')
const db = new Sequlize('ums','root','036369432',{
    host:'127.0.0.1',
    dialect:'mysql'
})

module.exports = db