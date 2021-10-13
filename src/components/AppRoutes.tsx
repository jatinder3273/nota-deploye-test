import React from "react";
import { Route } from "react-router-dom";

interface Props {
  exact: boolean;
  Layout: React.FunctionComponent<{}>;
  Component: any;
  path: string;
}
const AppRoutes = ({ Layout, Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AppRoutes;
