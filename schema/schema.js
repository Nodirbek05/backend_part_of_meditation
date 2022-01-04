//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        max: 30
    },
    // image: String,
    // category: String
    email: {
        type: String,
        unique: true,
        required: true,
        max: 30
    },
    password: {
        type: String,
        unique: true,
        required: true,
        max: 30
    },


});

module.exports = mongoose.model('meditation', SomeModelSchema );