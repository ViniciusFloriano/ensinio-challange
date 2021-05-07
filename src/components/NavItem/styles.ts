import styled from 'styled-components';

export const NavItemA = styled('a')`
  padding: 0.2rem 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 0.92rem;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.textPrimaryHover};
  }

  #icon svg {
    margin-bottom: -2px;
    margin-right: 0.4rem;
    height: 1.3rem;
    width: 1.3rem;
    vertical-align: bottom;
  }
  &:hover #icon svg {
    stroke: ${(props) => props.theme.colors.textPrimaryHover};
  }

  #dropdown svg {
    margin-left: 0.4rem;
    height: 0.55rem;
  }
  &:hover #dropdown svg {
    fill: ${(props) => props.theme.colors.textPrimaryHover};
  }
`;

export const NavItemButton = styled('a')`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 0.92rem;
  transition: 0.2s;
  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 1.5rem;
  padding: 0.6rem 1.6rem !important;
  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background-color: ${(props) => props.theme.colors.buttonHoverBackColor};
    color: #130c25;
  }
`;
