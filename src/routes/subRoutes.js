import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../components/Layout/404';
import LazyComponent from './LazyComponent';
import PrivateRoute from './PrivateRoute';

// 自动引入childRoutes目录里的子路由
const files = require.context('./childRoutes', false, /\.js$/);
const routeList = [];
files.keys().forEach((key) => {
  const child = files(key).default;
  routeList.push(...child);
});

const SubRoute = () => {
  return (
    <Switch>
      {routeList.map((value) => {
        return (
          <PrivateRoute
            exact
            path={value.path}
            key={value.path}
            component={LazyComponent(value.component)}
          />
        );
      })}
      <Route component={NoMatch} key="noMatch" />
    </Switch>
  );
};

export { routeList };
export default SubRoute;
