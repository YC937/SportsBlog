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

type Query {
    me: User
    getWeatherData(city: String!): WeatherData
}

type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!): Auth
}

type WeatherData {
    temperature: Float
    description: String
}
`;

module.exports = typeDefs;
