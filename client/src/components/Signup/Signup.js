import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SIGNUP_USER = gql`
  mutation SignupUser($username: String!, $password: String!) {
    signupUser(username: $username, password: $password) {
      token
    }
  }
`;

const Signup = () => {
  let username;
  let password;

  return (
    <Mutation mutation={SIGNUP_USER}>
      {(signupUser, { data }) => {
        if (data) {
          localStorage.setItem('token', data.signupUser.token);
        }
        return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              signupUser({ variables: { username: username.value, password: password.value } });
              username.value = "";
              password.value = "";
            }}
          >
            <input
              name="username"
              ref={node => username = node}
              placeholder="Username"
            />
            <input
              name="password"
              ref={node => password = node}
              placeholder="Password"
            />
            <button type="submit">Signup</button>
          </form>
        </div>
      )}}
    </Mutation>
  );
};

export default Signup;