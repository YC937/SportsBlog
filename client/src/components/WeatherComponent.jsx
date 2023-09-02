import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_WEATHER = gql`
  query GetWeather($city: String!) {
    fetchWeatherData(city: $city) {
      temperature
      description
    }
  }
`;

const WeatherComponent = () => {
  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: { city: 'New York' }, 
  });

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error fetching weather data</p>;

  const weather = data.fetchWeatherData;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temperature} K</p>
      <p>Description: {weather.description}</p>
      {/* Display more weather data as needed */}
    </div>
  );
};

export default WeatherComponent;
