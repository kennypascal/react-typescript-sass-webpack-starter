import './navigation.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface INavigationProps {
  location;
}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <div className="navigation">
      <ul className="navigation__content">
        <li className="nav-link">
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        </li>
        <li className="nav-link" >
          <NavLink exact to="/about" activeClassName="selected">About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
