import React, {Fragment} from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from './Constants/routes';
import AboutApp from './AboutApp';
import App from './HomeApp';

const NoMatch = () => (<div>ERROR</div>)

export default () => (
  <Router>
  <Switch>
  <Route exact path={routes.HOME} component={App}/>
  <Route path={routes.ABOUT} component={AboutApp}/>
  <Route path={routes.IMPRINT} component={App}/>
  <Route component={NoMatch}/>
</Switch>
</Router>
);
