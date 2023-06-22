const Sequelize = require("sequelize");
const db = require("../db");

const WaterIntake = db.define("WaterIntake", {
  volume: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = WaterIntake;
