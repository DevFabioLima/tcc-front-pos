import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './core/routes';
import GlobalStyles from './core/styles/global';
import AppProvider from './core/hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
