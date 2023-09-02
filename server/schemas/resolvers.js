const { User } = require('../models');
const auth = require('../utils/auth');
const axios = require('axios');
const { isLoggedIn } = require('./shared');


require('dotenv').config();

const resolvers = {
  Query: {
    me: async (parent, {}, context) => {
      if (!isLoggedIn(context)) {
        throw new Error('You need to be logged in!');
      }
      const id = context.user.id;
      let user = await User.findById(id);
      user = user.toObject();
      return user;
    },
    getWeatherData: async (_, { city }) => {
      const apiKey = process.env.OPENWEATHER_API_KEY;
      console.log('API Key:',apiKey);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const weatherData ={
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
      };

      return weatherData;
    }
  },
  Mutation: {
    signup: async (parent, { name, email, password }, context) => {
      const user = await User.create({ name, email, password });
      const token = auth.signToken(user);
      return { token, user }; 
},

login: async (parent, { email, password }, context) => {
  if (email) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Error: No user found with this email address');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new Error('Error: Incorrect credentials');
    }

    const token = auth.signToken(user);

    return { token, user };
  }
  throw new Error('Error: No user found with this email address');
},
// getWeatherData: async (_, { city }) => {
//   const apiKey = process.env.OPENWEATHER_API_KEY;
//   const response = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//   );
  
//   const weatherData = {
//     temperature: response.data.main.temp,
//     description: response.data.weather[0].description,
//   };

//   return weatherData;
//   },
},
};

module.exports = resolvers;