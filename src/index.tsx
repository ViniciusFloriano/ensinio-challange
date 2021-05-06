import { StrictMode } from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes';

render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
