import { gql } from '@apollo/client';

export const MUTATION_LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        name
      }
    }
  }
`