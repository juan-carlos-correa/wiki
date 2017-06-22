import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

class NavBarContainer extends React.PureComponent {
  render() {
    return (
      <Navbar className="teal" brand='logo' left>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    )
  }
}

export default NavBarContainer;