const Sequelize = require('sequelize');
const db = new Sequelize('checkoutExperience', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db
  .authenticate()
  .then(() => console.log('Database connection has been established successfully'))
  .catch((err) => console.log('Unable to connect to the database:', err));

module.exports = db;