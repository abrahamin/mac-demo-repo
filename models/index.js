const ModelOne = require('./ModelOne');
const ModelTwo = require('./ModelTwo');

ModelTwo.belongsTo(ModelOne, {  
})

module.exports = {
    ModelOne,
    ModelTwo,
};