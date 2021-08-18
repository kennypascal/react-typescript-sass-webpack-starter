import './navigation.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const COMPONENT_NAME = 'navigation';
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;
const COMPONENT_NAV_LINK_NAME = 'nav-link';
const COMPONENT_NAV_LINK_SELECTED_NAME = `${COMPONENT_NAV_LINK_NAME}-selected`;

const Navigation: React.FunctionComponent = () => {
  return (
    <div className={COMPONENT_NAME}>
      <ul className={COMPONENT_CONTENT_NAME}>
        <li className={COMPONENT_NAV_LINK_NAME}>
          <NavLink exact to="/" activeClassName={COMPONENT_NAV_LINK_SELECTED_NAME}>
            Home
          </NavLink>
        </li>
        <li className={COMPONENT_NAV_LINK_NAME}>
          <NavLink exact to="/about" activeClassName={COMPONENT_NAV_LINK_SELECTED_NAME}>
            About
          </NavLink>
        </li>
        <li className={COMPONENT_NAV_LINK_NAME}>
          <NavLink exact to="/sample" activeClassName={COMPONENT_NAV_LINK_SELECTED_NAME}>
            Sample
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
