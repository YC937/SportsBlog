const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const validateEmail = function (email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(email);
};

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
});

// Pre-hook functions that can be exported for testing
const hashPassword = async function (next) {
    if(this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
};

// Pre-hook functions that can be exported for testing
const hashAllPasswords = async function (next, docs) {
    if(Array.isArray(docs) && docs.length) {
        const hashedUsers = docs.map( async (user) => {
            user.password = await bcrypt.hash(user.password, saltRounds);
            return user;
        });
        const users = await Promise.all(hashedUsers);
        next();
    }
    else {
        return next(new Error('User list should not be empty'));
    }

    next();
}

// set up pre-save middleware to create password
userSchema.pre('save', hashPassword);
userSchema.pre('insertMany', hashAllPasswords);
    

  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema);

module.exports = User;