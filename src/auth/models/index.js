'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const UsersModel = require('./users');

const sequelize = new Sequelize('sqlite:memory');

module.exports = {
  sequelize,
  Users: UsersModel(sequelize, DataTypes),
};
