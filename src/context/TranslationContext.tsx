import React, { createContext, useEffect, useState } from 'react';

import { LanguagesProps } from '../interfaces/languageInterfaces';
import { TranslationProps } from '../interfaces/requestInterfaces';
import { getTranslations } from '../services/requests';

type LanguagesType = keyof LanguagesProps;

interface TranslationContextProps {
  loading: boolean;
  error: boolean;
  currentLang: LanguagesType;
  setCurrentLang: (language: LanguagesType) => void;
  t: (title: string) => string;
  translationData: TranslationProps[];
}

const Context = createContext<TranslationContextProps>({
  loading: true,
  error: false,
  currentLang: 'pt',
  setCurrentLang: () => {},
  t: (title: string) => title,
  translationData: [],
});

function useTranslation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [translationData, setTranslationData] = useState<TranslationProps[]>(
    []
  );
  const [currentLang, setCurrentLangState] = useState<LanguagesType>('pt');

  useEffect(() => {
    getTranslations()
      .then((data) => {
        setTranslationData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });

    const languageStorage = localStorage.getItem('language');

    if (languageStorage) {
      setCurrentLangState(JSON.parse(languageStorage));
    } else {
      const navigatorLanguage = navigator.language;
      if (navigatorLanguage.includes('en')) {
        setCurrentLangState('en');
      } else if (navigatorLanguage.includes('pt')) {
        setCurrentLangState('pt');
      } else if (navigatorLanguage.includes('es')) {
        setCurrentLangState('es');
      }
    }
  }, []);

  function t(title: string) {
    const translatedText = translationData.find(
      (td) => td.title.toLowerCase() === title.toLowerCase()
    );

    if (!translatedText) {
      return 'Translation not find';
    }

    return translatedText.value[currentLang];
  }

  function setCurrentLang(language: LanguagesType) {
    localStorage.setItem('language', JSON.stringify(language));
    setCurrentLangState(language);
  }

  return { loading, error, currentLang, setCurrentLang, t, translationData };
}

const TranslationProvider: React.FC = ({ children }) => {
  const {
    loading,
    error,
    currentLang,
    setCurrentLang,
    t,
    translationData,
  } = useTranslation();

  return (
    <Context.Provider
      value={{
        loading,
        error,
        currentLang,
        setCurrentLang,
        t,
        translationData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context as TranslationContext, TranslationProvider };
