import React from 'react';

import ArrowDropIcon from '../../assets/icons/arrow-down';
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
        <span id="icon">
          {leftIcon({})} {text}
        </span>
      );
    }
    if (dropdownComponent) {
      return (
        <span id="dropdown">
          {text} <ArrowDropIcon />
        </span>
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
