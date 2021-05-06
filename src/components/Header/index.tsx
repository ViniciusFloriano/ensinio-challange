import React from 'react';

import ArrowDropIcon from '../../assets/icons/arrow-down';
import LogoImage from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile';
import Container from '../Container';
import HeaderContainer from './styles';

const Header: React.FC = () => (
  <HeaderContainer>
    <Container>
      <div id="navbar">
        <img alt="logo" src={LogoImage} />
        <div>
          <div id="nav-center-items">
            <ul>
              <li>
                <a className="nav-item-dropdown" href="#a">
                  Soluções <ArrowDropIcon />
                </a>
              </li>
              <li>
                <a href="#a">Preços</a>
              </li>
              <li>
                <a href="#a">Academy</a>
              </li>
              <li>
                <a href="#a">Blog</a>
              </li>
              <li>
                <a href="#a">Contato</a>
              </li>
            </ul>
          </div>
          <div className="splitter">&nbsp;</div>
          <div id="nav-right-items">
            <ul>
              <li>
                <a className="nav-item-profile" href="#a">
                  <ProfileIcon />
                  Entrar
                </a>
              </li>
              <li>
                <a className="button" href="#a">
                  Começar agora
                </a>
              </li>
              <li>
                <a className="nav-item-dropdown" href="#a">
                  PT
                  <ArrowDropIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </HeaderContainer>
);

export default Header;
