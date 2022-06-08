import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
// import withData from '../../utils/apollo-client';

import '../styles/main.css';
import '../styles/why.css';
import client from '../../utils/apollo-client';
import '../styles/style.css';
import Layout from '../layout/Layout';








const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </ApolloProvider>
);


export default MyApp;
