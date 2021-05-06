import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
}
