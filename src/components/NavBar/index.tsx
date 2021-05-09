import React, { useContext, useState } from 'react';

import LogoImage from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile';
import { TranslationContext } from '../../context/TranslationContext';
import Container from '../Container';
import NavItemsList, { NavItemPropsExtended } from '../NavItemsList/index';
import NavBarContainer from './styles';

const EmptyComponent: React.FC = () => <div />;

const NavBar: React.FC = () => {
  const { t, currentLang } = useContext(TranslationContext);
  const [navbarBgActive, setNavbarBgActive] = useState(false);

  const centerItems: NavItemPropsExtended[] = [
    { key: '01', text: t('Solutions'), dropdownComponent: EmptyComponent },
    { key: '02', text: t('Prices') },
    { key: '03', text: t('Academy') },
    { key: '04', text: t('Blog') },
    { key: '05', text: t('Contact') },
  ];

  const rightItems: NavItemPropsExtended[] = [
    { key: '11', leftIcon: ProfileIcon, text: t('Sing On') },
    { key: '12', text: t('Start now'), type: 'button' },
    {
      key: '13',
      dropdownComponent: EmptyComponent,
      text: currentLang.toUpperCase(),
    },
  ];

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
