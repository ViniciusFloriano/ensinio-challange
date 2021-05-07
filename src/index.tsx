import { StrictMode } from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';

import NavBar from './components/NavBar';
import Routes from './routes';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes';

render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
