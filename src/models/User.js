const Sequlize = require('sequelize')
const db = require('../../db')

module.exports = db.define('User', {
    id: {
        type:           Sequlize.INTEGER(11),
        allowNull:      false,
        primaryKey:     true,
        autoIncrement:  true
    }, 
    name: {
        type:           Sequlize.STRING,
        allowNull:      false,
        unique:         true
    }, 
    email: {
        type:           Sequlize.STRING,
        allowNull:      false,
        unique:         true
    }, 
    telephone: {
        type:           Sequlize.STRING,
        allowNull:      false,
        unique:         true
    }
})