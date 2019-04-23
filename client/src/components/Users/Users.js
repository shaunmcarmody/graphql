import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USERS = gql`
    {
      users {
        id
        username
      }
    }
`;

const Users = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (<ul>
        {
          data.users.map(user => (
            <li key={user.id}>
              {user.username}
            </li>
          ))
        }
      </ul>)
    }}
  </Query>
);

export default Users;