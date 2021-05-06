export interface ThemeProps {
  colors: {
    primary?: string;
    secondary?: string;
    textPrimary?: string;
    textSecondary?: string;
    backgroundPrimary?: string;
    backgroundSecondary?: string;
    headerBackground?: string;
  };
  sizes: {
    xsmall: string | number;
    small: string | number;
    normal: string | number;
    large: string | number;
    xlarge: string | number;
    xxlarge: string | number;
  };
}
