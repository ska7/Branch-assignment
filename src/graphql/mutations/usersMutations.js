import { gql } from 'apollo-boost';

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($email: ID!, $newAttributes: UserAttributesInput!) {
    updateUser(email: $email, newAttributes: $newAttributes) {
      email
      name
      role
    }
  }
`;

export const DELETE_USERS_MUTATION = gql`
  mutation deleteUsers($emails: [ID]!) {
    deleteUsers(emails: $emails)
  }
`;

export const RESET_USERS_MUTATION = gql`
  mutation resetUsers {
    resetUsers
  }
`;
