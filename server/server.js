const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { contextTokenizer } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 7575;
const app = express();
const openWeatherApiKey = process.env.OPENWEATHER_API_KEY;
const eventMapping = require('./config/eventmap');

// ...

app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=${openWeatherApiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/api/searchEvent', (req, res) => {
  const userQuery = req.query.eventName;  

  const eventId = eventMapping[userQuery];
  if (eventId) {
  
    res.json({ eventId: eventId });
  } else {
    
    res.status(404).json({ error: 'Event not found' });
  }
});



const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    {
      async requestDidStart(context) {
        contextTokenizer(context);      
      },
    },
  ],
  formatError: (err) => {
    console.error(err); 
    return err;
  },
});

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
