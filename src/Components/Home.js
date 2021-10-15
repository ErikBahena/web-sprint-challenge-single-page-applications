import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHomePage = styled.section`
  .banner-container {
    width: 100%;
    // If the image does not load the background will be gray
    background-color: var(--gray);
    min-height: 25rem;
    height: 65vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: var(--white);
      font-size: 3rem;
    }

    a {
      display: inline-block;
      padding: 1rem 3rem;
      background-color: var(--white);
      color: var(--black);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: -0.05rem;
      text-decoration: none;
      margin-top: 1.4%;
      border-radius: var(--btn-border-radius);

      &:hover {
        color: var(--accent-color);
      }
    }
  }
`;

export default function Home() {
  return (
    <StyledHomePage className="home-section">
      <div className="banner-container">
        <h1>Your favorite food, delivered while coding.</h1>
        <NavLink
          to="/pizza"
          activeStyle={{
            color: "var(--accent-color)",
          }}
        >
          Pizza?
        </NavLink>
      </div>
    </StyledHomePage>
  );
}
