const { Product } = require("./models/product");

const Sequelize = require("sequelize");
const db = require("./db");

module.exports = { db, Product };
