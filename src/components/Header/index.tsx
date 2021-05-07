import React from 'react';

import LogoImage from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile';
import Container from '../Container';
import NavItemsList, { NavItemPropsExtended } from '../NavItemsList/index';
import HeaderContainer from './styles';

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

const Header: React.FC = () => (
  <HeaderContainer>
    <Container>
      <NavItemsList
        centerItems={centerItems}
        logo={LogoImage}
        rightItems={rightItems}
      />
    </Container>
  </HeaderContainer>
);

export default Header;
