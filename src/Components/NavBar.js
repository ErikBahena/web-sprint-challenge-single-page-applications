import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavBar = styled.nav`
  height: 4.5rem;
  width: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    text-transform: uppercase;
    color: var(--accent-color);
    margin-left: 4%;
    margin-top: 0;
    margin-bottom: 0;
  }

  .nav-links-container {
    width: max-content;
    height: 70%;
    background-color: var(--black);
    margin-right: 4%;
    padding: 0 1.3rem;
    display: flex;
    align-items: center;

    a {
      color: white;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: -0.05rem;
      text-decoration: none;
    }

    .middle-divider {
      height: 70%;
      width: 1px;
      background-color: var(--white);

      margin: 0 1rem;
    }
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <h2>Lambda Eats</h2>
      <div className="nav-links-container">
        <NavLink
          to="/"
          activeStyle={{
            color: "var(--accent-color)",
          }}
        >
          Home
        </NavLink>

        <div className="middle-divider"></div>
        <NavLink
          to="/pizza"
          activeStyle={{
            color: "var(--accent-color)",
          }}
        >
          Order Pizza
        </NavLink>
      </div>
    </StyledNavBar>
  );
}
