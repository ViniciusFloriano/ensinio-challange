import React from 'react';
import renderer from 'react-test-renderer';

import { cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { TranslationContext } from '../../context/TranslationContext';
import { LanguagesProps } from '../../interfaces/languageInterfaces';
import GlobalStyle from '../../styles/global';
import defaultTheme from '../../styles/themes';
import NavBar from '../NavBar';

it('renders correctly when there are no items', () => {
  const language: keyof LanguagesProps = 'pt';
  const translation = {
    loading: true,
    error: false,
    currentLang: language,
    setCurrentLang: () => {},
    t: (title: string) => title,
    translationData: [],
  };

  const tree = renderer
    .create(
      <TranslationContext.Provider value={translation}>
        <ThemeProvider theme={defaultTheme}>
          <NavBar />
          <GlobalStyle />
        </ThemeProvider>
      </TranslationContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
afterEach(cleanup);
