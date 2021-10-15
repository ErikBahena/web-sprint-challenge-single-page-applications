import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import PizzaForm from "./Components/PizzaForm";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
