const Sequelize = require('sequelize');
const db = require('./index.js');

const Cart = db.define('cart', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  addressline1: Sequelize.STRING,
  addressline2: Sequelize.STRING,
  city: Sequelize.TEXT,
  state: Sequelize.TEXT,
  zipcode: Sequelize.INTEGER,
  phone: Sequelize.INTEGER,
  creditcard: Sequelize.INTEGER,
  expirydate: Sequelize.DATEONLY,
  cvv: Sequelize.INTEGER,
  billingzip: Sequelize.INTEGER,
  purchase: Sequelize.BOOLEAN
}, { timestamps: true })

Cart.sync({ force: false })

module.exports = Cart;