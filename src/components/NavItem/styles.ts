import styled from 'styled-components';

export const NavItemA = styled('a')`
  padding: 0.2rem 1.2rem;
  color: #fff;
  font-size: 0.85rem;
  transition: 0.2s;

  &:hover {
    color: #bbb;
  }

  #icon svg {
    margin-bottom: -2px;
    margin-right: 0.4rem;
    height: 1.3rem;
    width: 1.3rem;
    vertical-align: bottom;
  }
  &:hover #icon svg {
    stroke: #bbb;
  }

  #dropdown svg {
    margin-left: 0.4rem;
    height: 0.55rem;
  }
  &:hover #dropdown svg {
    fill: #bbb;
  }
`;

export const NavItemButton = styled('a')`
  color: #fff;
  font-size: 0.85rem;
  transition: 0.2s;
  border: 1px solid #a4c6e9;
  border-radius: 1.5rem;
  padding: 0.6rem 1.4rem;
  &:hover {
    border-color: #bbb;
    background-color: #a4c6e9;
    color: #4c8cd9;
  }
`;
