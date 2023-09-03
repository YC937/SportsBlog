const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
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

type Query {
    me: User
    getWeatherData(city: String!): WeatherData
    getStadiumLocation(sportsGame: String!): [StadiumLocation]
}

type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!): Auth
    addStadiumLocation(name: String!, address: String!, lat: Float!, lng: Float!): StadiumLocation
}

type WeatherData {
    temperature: Float
    description: String
}
`;

module.exports = typeDefs;
