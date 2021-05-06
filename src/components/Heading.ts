import styled, { css } from 'styled-components';

import defaultTheme from '../assets/styles/themes';
import { HeadingProps } from '../interfaces/stylesInterfaces';

const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = 'black',
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
