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

const Signup = (props) => {
  let username;
  let password;

  return (
    <Mutation mutation={SIGNUP_USER}>
      {(signupUser, { data }) => {
        if (data) {
          localStorage.setItem('token', data.signupUser.token);
          props.history.push('/users'); /* Causing the following error, find alternative solution: 
          index.js:1446 Warning: Cannot update during an existing state transition 
          (such as within `render`). Render methods should be a pure function of props and state. */
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