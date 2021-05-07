import React from 'react';

import NavItem, { NavItemProps } from '../NavItem';
import NavItemsListContainer from './styles';

export interface NavItemPropsExtended extends NavItemProps {
  key: string;
}

interface NavItemsListProps {
  logo: string;
  centerItems: NavItemPropsExtended[];
  rightItems: NavItemPropsExtended[];
}

const NavItemsList: React.FC<NavItemsListProps> = ({
  logo,
  centerItems,
  rightItems,
}) => (
  <NavItemsListContainer>
    <img alt="logo" src={logo} />
    <div>
      <div id="nav-center-items">
        <ul>
          {centerItems.map((props) => (
            <li key={props.key}>
              <NavItem {...props} />
            </li>
          ))}
        </ul>
      </div>
      <div className="splitter">&nbsp;</div>
      <div id="nav-right-items">
        <ul>
          {rightItems.map((props) => (
            <li key={props.key}>
              <NavItem {...props} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </NavItemsListContainer>
);

export default NavItemsList;
