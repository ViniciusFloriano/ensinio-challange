import React from 'react';
import renderer from 'react-test-renderer';

import { cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { TranslationContext } from '../../context/TranslationContext';
import { LanguagesProps } from '../../interfaces/languageInterfaces';
import GlobalStyle from '../../styles/global';
import defaultTheme from '../../styles/themes';
import SolutionsDropdown from '../SolutionsDropdown';

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
  const solutionsItems = [
    {
      key: '01',
      desciption: translation.t('Lorem ipsum dolor sit amet'),
      title: translation.t('Create an Online School'),
      icon: 'EadIcon',
    },
    {
      key: '02',
      desciption: translation.t('Lorem ipsum dolor sit amet'),
      title: translation.t('Community and social network'),
      icon: 'AppIcon',
    },
    {
      key: '03',
      desciption: translation.t('Lorem ipsum dolor sit amet'),
      title: translation.t('Gamification'),
      icon: 'GamificationIcon',
    },
    {
      key: '04',
      desciption: translation.t('Lorem ipsum dolor sit amet'),
      title: translation.t('Mobile app'),
      icon: 'SocialIcon',
    },
  ];

  const tree = renderer
    .create(
      <TranslationContext.Provider value={translation}>
        <ThemeProvider theme={defaultTheme}>
          <SolutionsDropdown
            items={solutionsItems}
            title="Solutions Dropdown"
          />
          <GlobalStyle />
        </ThemeProvider>
      </TranslationContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
afterEach(cleanup);
