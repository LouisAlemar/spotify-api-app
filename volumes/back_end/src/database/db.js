const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('db', 'user', 'password', {
	host: 'db',
	dialect: 'mysql'
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db