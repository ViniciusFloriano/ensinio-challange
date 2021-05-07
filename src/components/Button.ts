import styled, { css } from 'styled-components';

import { ButtonProps } from '../interfaces/stylesInterfaces';
import defaultTheme from '../styles/themes';

const Button = styled('a')<ButtonProps>`
  ${({
    color = 'textPrimary',
    fontFamily = 'fontPrimary',
    size = 'small',
    fontWeight = 500,
    lineHeight = 1.5,
  }) => css`
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 0.85rem;
    transition: 0.2s;
    border: 1px solid ${(props) => props.theme.colors.buttonBorder};
    border-radius: 2.5rem;
    padding: 0.8rem 1.7rem;
    &:hover {
      border-color: ${(props) => props.theme.colors.buttonHoverBorder};
      background-color: ${(props) => props.theme.colors.buttonHoverBackColor};
      color: #130c25;
    }
    font-size: ${defaultTheme.sizes[size]};
    color: ${defaultTheme.colors[color]};
    font-weight: ${fontWeight};
    font-family: ${defaultTheme.fonts[fontFamily]};
    line-height: ${lineHeight};
  `}
`;

export default Button;
