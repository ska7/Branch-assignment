import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import apolloClient from './graphql/apolloClient';
import "./global.scss";


const Root = () => (
  <ApolloProvider client={apolloClient}>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));