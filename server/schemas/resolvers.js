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
    },
    getStadiumLocation: async (_, { sportsGame }) => {
      const apiKey = process.env.GOOGLEPLACES_API_KEY; 
      const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json`;
      
      try {
        const response = await axios.get(apiUrl, {
          params: {
            query: `${sportsGame} stadium`,
            key: apiKey,
          },
        });
    
        const stadiumLocations = response.data.results.map(result => ({
          name: result.name,
          address: result.formatted_address,
          location: result.geometry.location,
        }));
    
        return stadiumLocations;
      } catch (error) {
        console.error('Error fetching stadium locations:', error);
        throw new Error('Error fetching stadium locations');
      }
    }
  },
  Mutation: {
    signup: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = auth.signToken(user);
      return { token, user }; 
},

login: async (parent, { email, password }) => {
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