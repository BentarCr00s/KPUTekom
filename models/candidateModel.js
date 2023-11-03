const { DataTypes } = require("sequelize");
const sequelize = require("../database/dbConfig");

const Candidate = sequelize.define(
  "Candidate",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    misi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noUrut: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "candidates",
    timestamps: false,
  }
);

module.exports = Candidate;
