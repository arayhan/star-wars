import React from 'react';
import Home from '../../containers/Home/Home';
import People from '../../containers/People/People';
import PeopleDetails from '../../containers/PeopleDetails/PeopleDetails';
import Films from '../../containers/Films/Films';
import FilmsDetails from '../../containers/FilmsDetails/FilmsDetails';
import Planets from '../../containers/Planets/Planets';
import PlanetsDetails from '../../containers/PlanetsDetails/PlanetsDetails';
import Species from '../../containers/Species/Species';
import SpeciesDetails from '../../containers/SpeciesDetails/SpeciesDetails';
import Vehicles from '../../containers/Vehicles/Vehicles';
import VehiclesDetails from '../../containers/VehiclesDetails/VehiclesDetails';
import Starships from '../../containers/Starships/Starships';
import StarshipsDetails from '../../containers/StarshipsDetails/StarshipsDetails';
import { Switch, Route } from 'react-router-dom';

const Routes = props => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/people/:id" component={ PeopleDetails } />
        <Route path="/people" component={ People } />
        <Route path="/films/:id" component={ FilmsDetails } />
        <Route path="/films" component={ Films } />
        <Route path="/planets/:id" component={ PlanetsDetails } />
        <Route path="/planets" component={ Planets } />
        <Route path="/species/:id" component={ SpeciesDetails } />
        <Route path="/species" component={ Species } />
        <Route path="/vehicles/:id" component={ VehiclesDetails } />
        <Route path="/vehicles" component={ Vehicles } />
        <Route path="/starships/:id" component={ StarshipsDetails } />
        <Route path="/starships" component={ Starships } />
    </Switch>
);

export default Routes;