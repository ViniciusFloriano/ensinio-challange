import styled from 'styled-components';

const HeaderContainer = styled('header')`
  position: fixed;
  width: 100%;
  height: 6rem;
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(4px);
  --webkit-backdrop-filter: blur(4px);

  z-index: 2;

  display: flex;
  align-items: center;

  img {
    height: 44px;
  }

  #navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  #navbar div {
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

  ul li a {
    text-decoration: none;
    padding: 0.2rem 1.2rem;
    color: #fff;
    font-size: 0.85rem;
    transition: 0.2s;
  }

  ul li:last-child a {
    padding-right: 2.2rem;
  }

  #nav-right-items ul li a {
    padding: 0.2rem 3rem;
  }

  #nav-right-items ul li:first-child a {
    padding-left: 2.2rem;
  }

  #nav-right-items ul li .button {
    border: 1px solid #a4c6e9;
    border-radius: 1.5rem;
    padding: 0.6rem 1.5rem;
  }

  ul li .nav-item-dropdown svg {
    margin-left: 0.4rem;
    height: 0.55rem;
  }

  ul li .nav-item-profile svg {
    margin-bottom: -2px;
    margin-right: 0.4rem;
    height: 1.3rem;
    width: 1.3rem;
    vertical-align: bottom;
  }

  ul li a:hover {
    color: #bbb;
  }

  #nav-right-items ul li .button:hover {
    border-color: #bbb;
    background-color: #a4c6e9;
    color: #4c8cd9;
  }
  ul li .nav-item-profile:hover svg {
    stroke: #bbb;
  }
  ul li .nav-item-dropdown:hover svg {
    fill: #bbb;
  }
`;

export default HeaderContainer;
