import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Character from '../pages/Character';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/character" component={Character} />
    </Switch>
  </HashRouter>
);

export default Routes;
