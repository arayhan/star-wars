import React from 'react';
import Categories from '../../containers/Categories/Categories';
import CategoryItems from '../../containers/CategoryItems/CategoryItems';
import { Switch, Route } from 'react-router-dom';

const Routes = props => (
    <Switch>
        <Route exact path="/" component={ Categories } />
        <Route path="/:currentCategory" component={ CategoryItems } />
    </Switch>
);

export default Routes;