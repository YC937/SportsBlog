import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
        }
    } `

    export const GET_WEATHER_DATA = gql`
    query getWeatherData($city: String!) {
      getWeatherData(city: $city) {
        temperature
        description
      }
    }
  `;
  
  export const GET_STADIUM_LOCATION = gql`
    query getStadiumLocation($sportsGame: String!) {
      getStadiumLocation(sportsGame: $sportsGame) {
        name
        address
        location {
          lat
          lng
        }
      }
    }
  `;
  
  export const GET_TEAM = gql`
    query getTeam($id: ID!) {
      team(id: $id) {
        idTeam
        strTeam
        strAlternate
        strLeague
        strSport
        strCountry
        strStadium
        strStadiumLocation
        strStadiumThumb
        strTeamBadge
        strTeamLogo
        strDescriptionEN
        intFormedYear
      }
    }
  `;
  
  export const GET_PLAYER = gql`
    query getPlayer($id: ID!) {
      player(id: $id) {
        idPlayer
        strPlayer
        strTeam
        strPosition
        strThumb
        strDescriptionEN
      }
    }
  `;
  
  export const GET_EVENT = gql`
    query getEvent($id: ID!) {
      event(id: $id) {
        idEvent
        strEvent
        dateEvent
        strTime
      }
    }
  `;
  
  export const SEARCH_STADIUMS = gql`
    query searchStadiums($teamName: String!) {
      searchStadiums(teamName: $teamName) {
        name
        location
      }
    }
  `;  