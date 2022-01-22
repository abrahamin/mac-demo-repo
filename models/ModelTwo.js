const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ModelTwo extends Model {}

ModelTwo.init({

})

module.exports = ModelTwo;