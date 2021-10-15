import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { nanoid } from "nanoid";

const DeliveryCards = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        return (
          <Card key={nanoid(5)}>
            <CardImg
              top
              width="100%"
              src="https://source.unsplash.com/200x200"
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
        );
      })}
    </>
  );
};

export default DeliveryCards;
