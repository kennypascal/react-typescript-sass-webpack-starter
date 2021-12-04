import './navigation.scss';
import * as React from 'react';
import NavLink from './components/nav-link';

const COMPONENT_NAME = 'navigation';
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;
const COMPONENT_NAV_LINK_NAME = 'nav-link';

const Navigation: React.FunctionComponent = () => {
  return (
    <div className={COMPONENT_NAME}>
      <ul className={COMPONENT_CONTENT_NAME}>
        <li className={COMPONENT_NAV_LINK_NAME}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={COMPONENT_NAV_LINK_NAME}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={COMPONENT_NAV_LINK_NAME}>
          <NavLink to="/sample">Sample</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
