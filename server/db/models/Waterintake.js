const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("users", {
  username: {
    type: Sequelize.STRING,
    unique: true;
  },
  password:  Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    unique: true,
  },
});

module.exports = User;