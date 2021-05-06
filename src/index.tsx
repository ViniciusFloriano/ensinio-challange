import { StrictMode } from 'react';
import { render } from 'react-dom';

import GlobalStyle from './assets/styles/global';
import Header from './components/Header';
import Routes from './routes';

render(
  <StrictMode>
    <Header />
    <Routes />
    <GlobalStyle />
  </StrictMode>,
  document.getElementById('root')
);
