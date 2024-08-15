import ApolloClient from 'apollo-boost';
// import env from '../env.js';

const client = new ApolloClient({
  uri: '',
  request: (operation) => {
    operation.setContext({
      headers: {
        // 'x-api-key': env.GRAPHQL_API_KEY,
      },
    });
  },
});

export default client;
