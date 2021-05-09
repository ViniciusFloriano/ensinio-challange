import React from 'react';

import LanguagesDropdownItem, {
  LanguagesDropdownItemProps,
} from '../LanguagesDropdownItem';
import Container from './styles';

interface LanguagesDropdownProps {
  items: LanguagesDropdownItemProps[];
}

const LanguagesDropdown: React.FC<LanguagesDropdownProps> = ({ items }) => (
  <Container>
    {items && items.map((item) => <LanguagesDropdownItem {...item} />)}
  </Container>
);

export default LanguagesDropdown;
