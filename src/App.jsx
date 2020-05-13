import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

import './config/reactotron';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  </Provider>
);

export default App;
