import { ThemeProps } from './themeInterfaces';

export interface HeadingProps {
  color?: keyof ThemeProps['colors'];
  size?: keyof ThemeProps['sizes'];
  fontFamily?: keyof ThemeProps['fonts'];
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
export interface TextProps {
  color?: keyof ThemeProps['colors'];
  size?: keyof ThemeProps['sizes'];
  fontFamily?: keyof ThemeProps['fonts'];
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
}
