const mongoose = require('../config/database');
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

const schema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    version: {type: String, required: true},
    year: {type: Number, required: true},
    mileage: {type: Number, required: true},
    transmission : {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Cars', schema);