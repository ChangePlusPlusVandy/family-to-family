const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    }, 
    schooldistrict:{
        type: Integer,
        required: true,
        trim: true
    }, 
    zipcode: {
        type: Integer,
        required: true,
        trim: true
    },
    phonenumber: {
        type: Integer,
        required: true,
        trim: true,
        minLength: 10
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;