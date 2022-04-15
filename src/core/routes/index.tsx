import React from 'react';
import { Switch } from 'react-router-dom';
import listLocal from '../pages/local/list';

import Login from '../pages/login';
import Main from '../pages/main';
import ListProfile from '../pages/profile/list';
import ListSector from '../pages/sector/list';
import ListUser from '../pages/user/list';

import RouteWrapper from './RouteWrapper';

const Routes: React.FC = () => (
  <Switch>
    <RouteWrapper path="/" exact component={Login} />
    <RouteWrapper path="/main" isPrivate component={Main} />
    <RouteWrapper path="/list-user" isPrivate component={ListUser} />
    <RouteWrapper path="/list-profile" isPrivate component={ListProfile} />
    <RouteWrapper path="/list-local" isPrivate component={listLocal} />
    <RouteWrapper path="/list-sector" isPrivate component={ListSector} />
  </Switch>
);

export default Routes;
