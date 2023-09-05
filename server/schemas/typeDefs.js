const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
}

type Stadium {
    _id: ID!
    name: String!
    location: String!
    capacity: Int!
    team: String
    description: String
}

type Auth {
    token: ID!
    user: User
}

type Location {
    lat: Float
    lng: Float
}

type StadiumLocation {
    name: String
    address: String
    location: Location
}

  type Team {
    idTeam: ID
    strTeam: String
    strAlternate: String
    strLeague: String
    strSport: String
    strCountry: String
    strStadium: String
    strStadiumLocation: String
    strStadiumThumb: String
    strTeamBadge: String
    strTeamLogo: String
    strDescriptionEN: String
    intFormedYear: Int
  }
  
  type Player {
    idPlayer: ID
    strPlayer: String
    strTeam: String
    strPosition: String
    strThumb: String
    strDescriptionEN: String
  }
  
  input PlayerInput {
  name: String!
  team: String!
}
  type Event {
    idEvent: ID
    strEvent: String
    dateEvent: String
    strTime: String
  }
  
type Query {
    me: User
    stadiums(searchTerm: String!): [Stadium]
    getWeatherData(city: String!): WeatherData
    getStadiumLocation(sportsGame: String!): [StadiumLocation]
    event(id: ID, eventName: String): Event
    team(id: ID!): Team
    player(id: ID!): Player
}

type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!): Auth
    addStadiumLocation(name: String!, address: String!, lat: Float!, lng: Float!): StadiumLocation
    addPlayer(input: PlayerInput!): Player
}

type WeatherData {
    temperature: Float
    description: String
}
`;

module.exports = typeDefs;
