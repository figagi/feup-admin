import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/filter';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isPrivate = getToken('token') || true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isPrivate ? (
          <Component {...props} path={rest.path} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
