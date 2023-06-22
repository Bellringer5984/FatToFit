const Sequelize = require("sequelize");
const db = require("../db");

const Workout = db.define("workouts", {
  WorkoutType: {
    type: Sequelize.STRING,
  },
  password: Sequelize.STRING,
  date: Sequelize.DATE,
});

module.exports = Workout;
