import { StrictMode } from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';

import { TranslationProvider } from './context/TranslationContext';
import Routes from './routes';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes';

render(
  <StrictMode>
    <TranslationProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </TranslationProvider>
  </StrictMode>,
  document.getElementById('root')
);
