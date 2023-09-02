import { gql } from '@apollo/client';

export const MUTATION_SIGNUP = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  signup(username: $username, email: $email, password: $password) {
    user {
      _id
      username
      email
    }
  }
}
`

export const MUTATION_LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`