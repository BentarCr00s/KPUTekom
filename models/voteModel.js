const { DataTypes } = require("sequelize");
const sequelize = require("../database/dbConfig");
const Candidate = require("./candidateModel");

const Vote = sequelize.define("Vote", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  voter_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Vote.belongsTo(Candidate, { foreignKey: "candidate_id" });

module.exports = Vote;
