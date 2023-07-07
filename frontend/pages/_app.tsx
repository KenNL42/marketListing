import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import type { AppProps } from "next/app"
import { ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink,
  gql,
  from
} from '@apollo/client'
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) => {
      alert(`Graphql error ${message}`);
    })
  }
  if (networkError) {
    alert(`Graphql Network error ${networkError}`)
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:4444/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
  // uri: 'http://localhost:4444/graphql'
}) // ! need a way to hide from network

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <Component {...pageProps} />
      {/* </LocalizationProvider> */}
      </ApolloProvider>
    </SessionProvider>
  );
}
