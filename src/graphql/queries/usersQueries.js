import { gql } from 'apollo-boost';

export const ALL_USERS_QUERY = gql`
  query getAllUsers {
    allUsers {
      email
      name
      role
    }
  }
`;


export const USER_QUERY = gql`
  query getUser($email: ID!) {
    user(email: $email) {
      name
      role
      email
    }
  }
`;
