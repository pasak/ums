require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

const attractions = async (req,res)=>{
    connection.query(
        'SELECT * FROM attractions',
        function(err, results, fields) {
            res.send(results)
        }
    ) 
}

module.exports = { attractions }
