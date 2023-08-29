const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                return /.+@.+\..+/.test(email);
            },
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
});