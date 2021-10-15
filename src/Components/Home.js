import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DeliveryCards from "./DeliveryCards";

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
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
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

  .delivery-article {
    width: 100vw;
    padding: 4% 3%;
    background-color: var(--white);
    height: max-content;
    color: var(--black);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h2 {
      width: 100%;
      height: max-content;
      margin-top: 0;
      margin-bottom: 0.9rem;
    }
  }
`;

const initialCardData = [
  {
    image_url:
      "https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_1181606473_1592329384.jpg?VersionId=MZY8yYT5e2RM7arx_lljn.LNxSM78_C9",
    title: "McDonald's",
    subtitle: "American - Fast Food - Burgers",
    wait_time: "20-30 Min",
    delivery_fee: "$5.99 Delivery Fee",
  },
  {
    image_url:
      "https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_1181606473_1592329384.jpg?VersionId=MZY8yYT5e2RM7arx_lljn.LNxSM78_C9",
    title: "McDonald's",
    subtitle: "American - Fast Food - Burgers",
    wait_time: "20-30 Min",
    delivery_fee: "$5.99 Delivery Fee",
  },
  {
    image_url:
      "https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_1181606473_1592329384.jpg?VersionId=MZY8yYT5e2RM7arx_lljn.LNxSM78_C9",
    title: "McDonald's",
    subtitle: "American - Fast Food - Burgers",
    wait_time: "20-30 Min",
    delivery_fee: "$5.99 Delivery Fee",
  },
  {
    image_url:
      "https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_1181606473_1592329384.jpg?VersionId=MZY8yYT5e2RM7arx_lljn.LNxSM78_C9",
    title: "McDonald's",
    subtitle: "American - Fast Food - Burgers",
    wait_time: "20-30 Min",
    delivery_fee: "$5.99 Delivery Fee",
  },
  {
    image_url:
      "https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_1181606473_1592329384.jpg?VersionId=MZY8yYT5e2RM7arx_lljn.LNxSM78_C9",
    title: "McDonald's",
    subtitle: "American - Fast Food - Burgers",
    wait_time: "20-30 Min",
    delivery_fee: "$5.99 Delivery Fee",
  },
  {
    image_url:
      "https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_1181606473_1592329384.jpg?VersionId=MZY8yYT5e2RM7arx_lljn.LNxSM78_C9",
    title: "McDonald's",
    subtitle: "American - Fast Food - Burgers",
    wait_time: "20-30 Min",
    delivery_fee: "$5.99 Delivery Fee",
  },
];

export default function Home() {
  const [cards, setCards] = useState(initialCardData);

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

      <article className="delivery-article">
        <h2>Food Delivery in Gotham City</h2>

        <DeliveryCards cards={cards} />
      </article>
    </StyledHomePage>
  );
}
