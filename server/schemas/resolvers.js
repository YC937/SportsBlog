const { User } = require('../models');
const auth = require('../utils/auth');
const axios = require('axios');
const { Types } = require('mongoose');
const { isLoggedIn } = require('./shared');


require('dotenv').config();

const resolvers = {
  Query: {
    me: async (parent, { }, context) => {
      if (!isLoggedIn(context)) {
        throw new Error('You need to be logged in!');
      }
      const id = context.user._id;
      let user = await User.findById(id);
      user = user.toObject();

      console.log(user);
      return user;
    }
  },

  Mutation: {

    signup: async (parent, { name, email, password }, context) => {
      const user = await User.create({ name, email, password });
      const token = auth.signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }, context) => {
      if(email) {
        const user = await User.findOne({ email });

        if(!user) {
          throw new Error('Error: No user found with this email address');
        }

        const correctPw = await user.isCorrectPassword(password);

        if(!correctPw) {
          throw new Error('Error: Incorrect credentials');
        }

        const token = auth.signToken(user);

        return { token, user };
      }
      throw new Error('Error: No user found with this email address');
    },
  },
};

module.exports = resolvers;
