import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import PizzaForm from "./Components/PizzaForm";

import formSchema from "./formSchema.js";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  email: "",
  size: "",
  special: "",
  pepperoni: false,
  sausage: false,
  pineapple: false,
  extraCheese: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  size: "",
};

const initialDisabled = false;

const initialOrders = [];

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  const validate = (name, value) => {
    // I only want to validate with yup for the name input and the email input
    console.log(name, value);
    if (name === "name" || name === "email" || name === "size") {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch((err) =>
          setFormErrors({ ...formErrors, [name]: err.errors[0] })
        );
    }
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const createOrder = (newOrder) => {
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        setOrders([...orders, { [res.data.id]: res.data }]);
      })
      .catch((err) => console.log(err))
      .finally(setFormValues(initialFormValues));
    console.log(orders);
  };

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/pizza">
          <PizzaForm
            disabled={disabled}
            createOrder={createOrder}
            values={formValues}
            change={inputChange}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
