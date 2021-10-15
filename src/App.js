import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import PizzaForm from "./Components/PizzaForm";

const App = () => {
  return (
    <Switch>
      <Route path="/pizza">
        <PizzaForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default App;
