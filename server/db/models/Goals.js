const Sequelize = require("sequelize");
const db = require("../db");

const Goal = db.define("goals", {
  goal: {
    type: Sequelize.STRING,
  },
  date: Sequelize.date,
  completed: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Goal;
