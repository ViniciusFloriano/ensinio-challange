import styled from 'styled-components';

const NavItemsListContainer = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > img {
    height: 46px;
  }

  div {
    display: flex;
    align-items: center;
  }

  #nav-center-items ul li a {
    padding: 0 1.6rem;
  }

  #nav-right-items ul li a {
    padding: 0.6rem 2rem;
  }

  .splitter {
    background-color: ${(props) => props.theme.colors.iconsSecondary};
    width: 1px;
    line-height: 1.5rem;
    margin: 0 1rem;
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
