import * as React from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

const COMPONENT_NAV_LINK_NAME = 'nav-link';
const COMPONENT_NAV_LINK_SELECTED_NAME = `${COMPONENT_NAV_LINK_NAME}-selected`;

const NavLink: React.FunctionComponent<LinkProps> = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? COMPONENT_NAV_LINK_SELECTED_NAME : null} to={to}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
