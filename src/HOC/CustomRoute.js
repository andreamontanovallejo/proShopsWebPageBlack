import React, { useContext } from "react";
import Agent from "../config";
import { Redirect, Route } from "react-router-dom";

import { GetUserRoute, UserRoute } from "../routes";
import Context from "../Context";

const CustomRoute = ({
  component: Component,
  roles,
  isPrivate = true,
  changeTower,
  ...rest
}) => {
  const { isAuth, activateAuth } = useContext(Context.Shared);

  return (
    <Route
      {...rest}
      render={(props) => {
        const pushTo = (route) => {
          props.history.push(route);
        };

        if (!isAuth && isPrivate) {
          return (
            <Redirect
              to={{
                pathname: GetUserRoute(UserRoute.login),
                state: { from: props.location },
              }}
            />
          );
        }

        if (roles && !Agent.isAuthorized(roles)) {
          return <Redirect to={{ pathname: GetUserRoute(UserRoute.login) }} />;
        }

        return (
          <Component
            pushTo={pushTo}
            activateAuth={activateAuth}
            changeTower={changeTower}
            {...props}
          />
        );
      }}
    />
  );
};

export default CustomRoute;
