import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_STADIUM_LOCATIONS } from './utils/queries'; 

function StadiumLocations({ sportsGame }) {
  const { loading, error, data } = useQuery(GET_STADIUM_LOCATIONS, {
    variables: { sportsGame },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const stadiumLocations = data.getStadiumLocation;

  return (
    <div>
      <h2>Stadium Locations for {sportsGame}</h2>
      {stadiumLocations.map(location => (
        <div key={location.name}>
          <h3>{location.name}</h3>
          <p>Address: {location.address}</p>
        </div>
      ))}
    </div>
  );
}

export default StadiumLocations;
