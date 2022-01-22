const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ModelOne extends Model {}

ModelOne.init({

})

module.exports = ModelOne;