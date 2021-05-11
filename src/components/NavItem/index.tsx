import React from 'react';

import ArrowDropIcon from '../../assets/icons/arrow-down';
import Text from '../Text';
import { NavItemA, NavItemButton } from './styles';

export interface NavItemProps {
  text: string;
  type?: 'default' | 'button';
  to?: string;
  dropdownComponent?: React.FC;
  leftIcon?: React.FC;
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  type = 'default',
  to,
  dropdownComponent,
  leftIcon,
}) => {
  function getChildren() {
    if (leftIcon) {
      return (
        <Text id="icon" kind="span" size="xxsmall">
          {leftIcon({})} {text}
        </Text>
      );
    }
    if (dropdownComponent) {
      return (
        <>
          <Text className="dropdown" kind="span" size="xxsmall">
            {text} <ArrowDropIcon />
          </Text>
          <div className="dropdown-content">{dropdownComponent({})}</div>
        </>
      );
    }
    return text;
  }

  if (type === 'default') {
    return <NavItemA href={to}>{getChildren()}</NavItemA>;
  }
  return <NavItemButton href={to}>{text}</NavItemButton>;
};

export default NavItem;
