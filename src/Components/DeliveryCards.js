import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import styled from "styled-components";

import { nanoid } from "nanoid";

const StyledCard = styled.div`
  flex-basis: 30%;
  margin: 1.5rem 0.4rem;

  .card {
    width: 75%;
    border-radius: 0.7rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding-bottom: 1rem;

    img {
      border-top-left-radius: 0.7rem;
      border-top-right-radius: 0.7rem;
    }

    h3 {
      margin-top: 0.4rem;
      margin-left: 0.5rem;
      margin-bottom: 0;
    }

    h4 {
      margin-left: 0.7rem;
      margin-top: 0.5rem;
      margin-bottom: 0.3rem;
      color: var(--accent-color);
    }

    a {
      display: inline-block;
      padding: 0.4rem 0.6rem;
      height: max-content;
    
      color: var(--black);
      font-weight: 625;
      font-size: 1rem;
      letter-spacing: -0.05rem;
      text-decoration: none;
    }
  }
`;

const DeliveryCards = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        return (
          <StyledCard key={nanoid(5)}>
            <Card className="card">
              <CardImg
                top
                width="100%"
                src={card.image_url}
                alt="pizza"
              />
              <CardBody>
                <CardTitle tag="h3">{card.title}</CardTitle>
                <CardSubtitle tag="h4" className="mb-2 text-muted">
                  {card.subtitle}
                </CardSubtitle>
                <a>{card.wait_time}</a>
                <a>{card.delivery_fee}</a>
              </CardBody>
            </Card>
          </StyledCard>
        );
      })}
    </>
  );
};

export default DeliveryCards;
