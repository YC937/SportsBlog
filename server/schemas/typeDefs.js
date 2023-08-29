const typeDefs = `
type User {
    _id: ID!
    name: String!
    email: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    signup(name: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
