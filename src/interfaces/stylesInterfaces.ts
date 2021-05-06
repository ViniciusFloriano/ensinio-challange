import { ThemeProps } from './themeInterfaces';

export interface HeadingProps {
  color?: keyof ThemeProps['colors'];
  size?: keyof ThemeProps['sizes'];
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
