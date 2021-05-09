import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { LanguagesProps } from '../interfaces/languageInterfaces';
import { TranslationProps } from '../interfaces/requestInterfaces';
import { getTranslations } from '../services/requests';

type LanguagesType = keyof LanguagesProps;

interface TranslationContextProps {
  loading: boolean;
  error: boolean;
  currentLang: LanguagesType;
  setCurrentLang: Dispatch<SetStateAction<keyof LanguagesProps>>;
  t: (title: string) => string;
  translationData: TranslationProps[];
}

const Context = createContext<TranslationContextProps>({
  loading: true,
  error: false,
  currentLang: 'es',
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
  const [currentLang, setCurrentLang] = useState<LanguagesType>('es');

  useEffect(() => {
    getTranslations()
      .then((data) => {
        setTranslationData(data);
        setLoading(false);
      })
      .catch((data) => {
        window.console.log(data);
        setError(true);
      });
  }, []);

  function t(title: string) {
    window.console.log(translationData);
    const translatedText = translationData.find(
      (td) => td.title.toLowerCase() === title.toLowerCase()
    );
    window.console.log(translatedText);

    if (!translatedText) {
      return 'Translation not find';
    }

    return translatedText.value[currentLang];
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
