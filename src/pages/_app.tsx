import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../../utils/apollo-client';

import '../styles/main.css';


const MyApp = ({ Component, pageProps, apollo  }: AppProps) => (
  <ApolloProvider client={apollo}>
  <Component {...pageProps} />
  </ApolloProvider>
);

export default withData(MyApp);
