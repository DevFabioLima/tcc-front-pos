/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import AuthLayout from '../components/layouts/auth';
import DefaultLayout from '../components/layouts/default';
import { useAuth } from '../hooks/auth';

interface IRouteProps extends RouteProps{
  isPrivate?: boolean;
  component: React.ComponentType
}

const RouteWrapper: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const isSigned = !!user;
  const Layout = isSigned ? AuthLayout : DefaultLayout;
  return (
    <Route
      {...rest}
      render={({ location }) => (isPrivate === isSigned ? (
        <Layout component={Component} />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/main',
          state: { from: location },
        }}
        />
      ))}
    />
  );
};

export default RouteWrapper;
