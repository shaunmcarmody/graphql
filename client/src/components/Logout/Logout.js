import React from "react";
import { ApolloConsumer } from "react-apollo";
import { Redirect } from "react-router-dom";

const Logout = () => (
  <ApolloConsumer>
    {client => {
      client.resetStore();
      localStorage.removeItem('token');
      return <Redirect to="/" />;
    }}
  </ApolloConsumer>
)

export default Logout;