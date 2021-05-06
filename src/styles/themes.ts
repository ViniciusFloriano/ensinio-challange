import { ThemeProps } from '../interfaces/themeInterfaces';

const defaultTheme: ThemeProps = {
  colors: {
    primary: '',
    secondary: '',
    textPrimary: '',
    textSecondary: '',
    backgroundPrimary:
      'linear-gradient(79.95deg, #5f41d9 2.25%, #41b5d9 100.27%)',
    backgroundSecondary: '',
  },
  sizes: {
    xsmall: '1rem',
    small: '1.2rem',
    normal: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    xxlarge: '4rem',
  },
};

export default defaultTheme;
