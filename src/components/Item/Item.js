import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ item }) => {
  return (
    <div className="card">
      <Card>
        <div className="centerText">
          <Card.Content>
            <Link to={`/detail/${item.id}`}>
              <Card.Header className="cardHeader">{item.title}</Card.Header>
              <Card.Meta>{item.description}</Card.Meta>
              <Image className="img" src={item.img} />
              <div className="precio">
                <Card.Description>${item.price}</Card.Description>
              </div>
            </Link>
          </Card.Content>
        </div>
      </Card>
    </div>
  );
};
