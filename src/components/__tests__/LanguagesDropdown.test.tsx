import React from 'react';
import renderer from 'react-test-renderer';

import { cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { TranslationContext } from '../../context/TranslationContext';
import { LanguagesProps } from '../../interfaces/languageInterfaces';
import GlobalStyle from '../../styles/global';
import defaultTheme from '../../styles/themes';
import LanguagesDropdown from '../LanguagesDropdown';

it('renders correctly when there are no items', () => {
  const language: keyof LanguagesProps = 'pt';
  const translation = {
    loading: true,
    error: false,
    currentLang: language,
    setCurrentLang: (strLanguage: string) => strLanguage,
    t: (title: string) => title,
    translationData: [],
  };
  const languagesItems = [
    {
      icon: 'BrazilIcon',
      key: '01',
      title: 'PT',
      checked: translation.currentLang === 'pt',
      onClick: () => translation.setCurrentLang('pt'),
    },
    {
      icon: 'UsaIcon',
      key: '02',
      title: 'EN',
      checked: translation.currentLang !== 'pt',
      onClick: () => translation.setCurrentLang('en'),
    },
    {
      icon: 'SpainIcon',
      key: '03',
      title: 'ES',
      checked: translation.currentLang !== 'pt',
      onClick: () => translation.setCurrentLang('es'),
    },
  ];

  const tree = renderer
    .create(
      <TranslationContext.Provider value={translation}>
        <ThemeProvider theme={defaultTheme}>
          <LanguagesDropdown
            items={languagesItems}
          />
          <GlobalStyle />
        </ThemeProvider>
      </TranslationContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
afterEach(cleanup);
