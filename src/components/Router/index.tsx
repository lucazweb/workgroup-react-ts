import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Users } from "../../pages";

const Router: React.FC = () => {
  const page404 = () => <pre> Oups! Nada encontrado..</pre>;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route component={page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
