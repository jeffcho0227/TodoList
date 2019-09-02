import client from './apollo.js';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './Components/App.jsx';

const app = (
  <ApolloProvider client={client}>
    {console.log(client)}
    <App />
  </ApolloProvider>
)

ReactDOM.render(app, document.getElementById('app'));