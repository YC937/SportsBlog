import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENT } from '../utils/queries';

export default function EventComponent({ id }) {
  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const event = data.event;

  return (
    <div>
      <h2>{event.strEvent}</h2>
      <p>Date: {event.dateEvent}</p>
      <p>Time: {event.strTime}</p>
      {}
    </div>
  );
}


