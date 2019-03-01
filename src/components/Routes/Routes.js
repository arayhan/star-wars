import React from 'react';
import Home from '../../containers/Home/Home';
import { Switch, Route } from 'react-router-dom';

const Routes = props => (
    <Switch>
        <Route exact path="/" component={ Home } />
    </Switch>
);

export default Routes;