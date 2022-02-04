// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class ModelOne extends Model {}

// ModelOne.init({

// })

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelOne = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    test: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            }
        }
    ]
})

module.exports = ModelOne;