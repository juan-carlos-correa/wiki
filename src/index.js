import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import SideNav from './SideNav/containers/SideNavContainer/';
import NavBarContainer from './NavBar/containers/NavBarContainer/';

ReactDOM.render(
  <main>
    <NavBarContainer />
    <SideNav />
  </main>
  ,
  document.getElementById('root'));
registerServiceWorker();
