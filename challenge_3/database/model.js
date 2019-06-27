const Sequelize = require('sequelize');
const db = require('./index.js');

const Cart = db.define('cart', {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  address1: { type: Sequelize.STRING },
  address2: { type: Sequelize.STRING },
  city: { type: Sequelize.TEXT },
  state: { type: Sequelize.TEXT },
  zipcode: { type: Sequelize.INTEGER },
  phone: { type: Sequelize.INTEGER },
  creditcard: { type: Sequelize.INTEGER },
  expirydate: { type: Sequelize.DATEONLY },
  cvv: { type: Sequelize.INTEGER },
  billingzip: { type: Sequelize.INTEGER },
  purchase: { type: Sequelize.BOOLEAN }
}, { timestamps: false })

Cart.sync({ force: false })

module.exports = Cart;