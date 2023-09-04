import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_DATA } from './utils/queries'; 

const WeatherComponent = ({ city }) => {
  const { loading, error, data } = useQuery(GET_WEATHER_DATA, {
    variables: { city },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { temperature, description } = data.getWeatherData;

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherComponent;
