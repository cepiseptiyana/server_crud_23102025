const { DataTypes } = require("sequelize");
const sequelize = require("../database/user");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nomorTelepon: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10], // minimal 10 karakter,
        isNumeric: true,
      },
    },
    statusAktif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    departemen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: true }
);

module.exports = User;
