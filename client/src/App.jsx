import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink, 
} from '@apollo/client'
// import LoginForm from './components/LoginForm';
import LoginProvider from './utils/LoginContext';
import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Auth from './utils/auth';


// Main GraphQL endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Contruct request middleware that will attach the JWT to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage (if it exists)
  const token = Auth.getToken();
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [count, setCount] = useState(0)

  // Get token, if null, the empty string will be the token
  const token = Auth.getToken() || '';
  console.log(token);

  // Want to set the proper state from the beginning if we are initially logged in
  const loggedIn = token.length > 0;

  // Declared apollo provider here, so we cannot run queries in this App component
  // Created a LoginCheck component to run queries
  console.log(token);

  return (
    <ApolloProvider client={client}>
      <LoginProvider token={token} loggedIn={loggedIn}>
        <Nav />
        <Outlet />
      </LoginProvider>
    </ApolloProvider>
  )
}

export default App
