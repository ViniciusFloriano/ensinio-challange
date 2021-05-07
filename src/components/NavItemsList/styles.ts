import styled from 'styled-components';

const NavItemsListContainer = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    height: 44px;
  }

  div {
    display: flex;
    align-items: center;
  }

  .splitter {
    background-color: #609adb;
    width: 1px;
    line-height: 1.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  ul li {
    display: inline-block;
  }
`;

export default NavItemsListContainer;
