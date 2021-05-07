import styled, { css } from 'styled-components';

import { HeadingProps } from '../interfaces/stylesInterfaces';
import defaultTheme from '../styles/themes';

const Heading = styled('p')<HeadingProps>`
  ${({
    color = 'textPrimary',
    fontFamily = 'fontPrimary',
    size = 'normal',
    fontWeight = 700,
    lineHeight = 1.5,
  }) => css`
    font-size: ${defaultTheme.sizes[size]};
    color: ${defaultTheme.colors[color]};
    font-weight: ${fontWeight};
    font-family: ${defaultTheme.fonts[fontFamily]};
    line-height: ${lineHeight};
  `}
`;

export default Heading;
