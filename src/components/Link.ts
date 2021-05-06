import styled, { css } from 'styled-components';

import { HeadingProps } from '../interfaces/stylesInterfaces';
import defaultTheme from '../styles/themes';

const Heading = styled('a').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = 'textPrimary',
    size = 'normal',
    fontWeight = 700,
    lineHeight = 1.5,
  }) => css`
    font-size: ${defaultTheme.sizes[size]};
    color: ${defaultTheme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;

export default Heading;
