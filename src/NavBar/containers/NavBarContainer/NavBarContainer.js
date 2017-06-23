import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import SideNavContainer from '../../../SideNav/containers/SideNavContainer/';

class NavBarContainer extends React.PureComponent {
  render() {
    return (
      <Navbar className="teal" brand='logo' left>
        <NavItem><SideNavContainer /></NavItem>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    )
  }
}

export default NavBarContainer;