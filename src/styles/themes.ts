import { ThemeProps } from '../interfaces/themeInterfaces';

const defaultTheme: ThemeProps = {
  colors: {
    primary: '',
    secondary: '',
    textPrimary: '#fff',
    textPrimaryHover: '#bbb',
    textSecondary: '#D6D4F6',
    backgroundPrimary:
      'linear-gradient(79.95deg, #5f41d9 2.25%, #41b5d9 100.27%)',
    backgroundSecondary: '#fff',
    iconsSecondary: '#609adb',
    buttonBorder: '#a4c6e9',
    buttonHoverBorder: '#bbb',
    buttonHoverBackColor: '#a4c6e9',
  },
  sizes: {
    xsmall: '1rem',
    small: '1.1rem',
    normal: '1.6rem',
    large: '2.8rem',
    xlarge: '3.2rem',
    xxlarge: '4rem',
  },
  fonts: {
    fontPrimary: 'Inter',
    fontSecondary: 'Be Vietnam',
  },
};

export default defaultTheme;
