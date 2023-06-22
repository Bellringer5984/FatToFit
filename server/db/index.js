//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Workout = require("./models/Workout.js");
const Goals = require("./models/Goals.js");
const WaterIntake = require("./models/Waterintake");

// Associations
Workout.belongsTo(User);
Goals.belongsTo(User);
WaterIntake.belongsTo(User);

User.hasMany(Workout);
User.hasMany(WaterIntake);
User.hasOne(Goals);

module.exports = {
  db,
  models: {
    User,
    Workout,
    Goals,
    WaterIntake,
  },
};
