import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TEAM } from './utils/queries';

function TeamComponent({ id }) {
  const { loading, error, data } = useQuery(GET_TEAM, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const team = data.team;

  return (
    <div>
      <h2>{team.strTeam}</h2>
      <p>League: {team.strLeague}</p>
      {}
    </div>
  );
}

export default TeamComponent;
