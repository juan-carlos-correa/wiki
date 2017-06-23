import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import NavBarContainer from './NavBar/containers/NavBarContainer/';

ReactDOM.render(
  <main>
    <NavBarContainer />
  </main>
  ,
  document.getElementById('root'));
registerServiceWorker();
