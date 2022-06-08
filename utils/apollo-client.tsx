// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  // NormalizedCacheObject,
} from '@apollo/client'


import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';


// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = '/api/graphql';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
const client =
    new ApolloClient({
      link:(link as unknown) as ApolloLink,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        // .restore(initialState || {})
    })
// );
export default client;