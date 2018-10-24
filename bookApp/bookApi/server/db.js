const Sequelize = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})
sequelize.authenticate().then(
    function() {
        console.log('Conneted to BookAPI')
    },
    function(err){
        console.log(err)
    }
)
module.exports = sequelize