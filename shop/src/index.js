import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache, } from '@apollo/client'
import { initialState } from './reducer';
import reducer from './reducer';
import { StateProvider } from './StateProvider';

const client = new ApolloClient({

  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StateProvider>
);


