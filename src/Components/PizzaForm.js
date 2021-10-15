import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";

import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 2rem 2rem;
`;

export default function PizzaForm({
  values,
  change,
  errors,
  createOrder,
  disabled,
}) {
  const onChange = (e) => {
    const { name, value, checked, type } = e.target;

    let valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
  };

  return (
    <StyledFormContainer>
      <Form id="pizza-form">
        <h2>Your Information</h2>
        <h4>Required</h4>
        <FormGroup>
          <Label for="name-input">Name</Label>
          <Input
            onChange={onChange}
            type="text"
            id="name-input"
            name="name"
            value={values.name}
            // invalid=true if the error string is not empty, invalid=false if the error string is empty.
            invalid={!!errors.name}
            // if the error is an not an empty string then valid=false, if the error is an empty string then check if the value is empty or not, if the value is empty then valid = false, if the value is not empty then the valid=true
            valid={errors.name ? false : values.name ? true : false}
          />
          <FormFeedback>{errors.name}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={onChange}
            type="email"
            id="email"
            name="email"
            value={values.email}
            invalid={!!errors.email}
            valid={errors.email ? false : values.email ? true : false}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>

        <h2>Choice of Size</h2>
        <h4>Required</h4>

        <FormGroup>
          <Label for="size-dropdown">Select Size</Label>
          <br></br>
          <Input
            type="select"
            id="size-dropdown"
            name="size"
            value={values.size}
            onChange={onChange}
            invalid={!!errors.size}
            valid={errors.size ? false : values.size ? true : false}
          >
            <option>Select</option>
            <option>Extra Large</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </Input>
          <FormFeedback>{errors.size}</FormFeedback>
        </FormGroup>

        <h3> Add Toppings</h3>

        <FormGroup check>
          <Label for="pepperoni-topping"></Label>
          <Input
            onChange={onChange}
            type="checkbox"
            id="pepperoni-topping"
            name="pepperoni"
            checked={values.pepperoni}
          />
          Pepperoni
        </FormGroup>

        <FormGroup check>
          <Label for="sausage-topping"></Label>
          <Input
            onChange={onChange}
            type="checkbox"
            id="sausage-topping"
            name="sausage"
            checked={values.sausage}
          />
          Sausage
        </FormGroup>

        <FormGroup check>
          <Label for="pineapple-topping"></Label>
          <Input
            onChange={onChange}
            type="checkbox"
            id="pineapple-topping"
            name="pineapple"
            checked={values.pineapple}
          />
          Pineapple
        </FormGroup>

        <FormGroup check>
          <Label for="extra-cheese-topping"></Label>
          <Input
            onChange={onChange}
            type="checkbox"
            id="extra-cheese-topping"
            name="extraCheese"
            checked={values.extraCheese}
          />
          Extra Cheese
        </FormGroup>

        <Button
          id="order-button"
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            createOrder(values);
          }}
        >
          Add to Order
        </Button>
      </Form>
    </StyledFormContainer>
  );
}
