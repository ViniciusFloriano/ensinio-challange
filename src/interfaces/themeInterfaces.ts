export interface ThemeProps {
  colors: {
    white?: string;
    black?: string;
    gray?: string;
    lightGray?: string;
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
