import React, { useState } from 'react';

import LogoImage from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile';
import Container from '../Container';
import NavItemsList, { NavItemPropsExtended } from '../NavItemsList/index';
import NavBarContainer from './styles';

const EmptyComponent: React.FC = () => <div />;

const centerItems: NavItemPropsExtended[] = [
  { key: '01', text: 'Soluções', dropdownComponent: EmptyComponent },
  { key: '02', text: 'Preços' },
  { key: '03', text: 'Academy' },
  { key: '04', text: 'Blog' },
  { key: '05', text: 'Contato' },
];

const rightItems: NavItemPropsExtended[] = [
  { key: '11', leftIcon: ProfileIcon, text: 'Entrar' },
  { key: '12', text: 'Começar agora', type: 'button' },
  { key: '13', dropdownComponent: EmptyComponent, text: 'PT' },
];

const NavBar: React.FC = () => {
  const [navbarBgActive, setNavbarBgActive] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 15) {
      setNavbarBgActive(true);
    } else {
      setNavbarBgActive(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <NavBarContainer navbarBgActive={navbarBgActive}>
      <Container>
        <NavItemsList
          centerItems={centerItems}
          logo={LogoImage}
          rightItems={rightItems}
        />
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;
