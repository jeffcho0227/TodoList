import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './Components/App.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const app = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(app, document.getElementById('app'));