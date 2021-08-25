import React from "react";

//Import Card, Image and Link
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

//Import css
import "./Item.css";

export const Item = ({ producto }) => {
  return (
    <Link to={`/detail/${producto.id}`}>
       <div className="card">
      <Card>
        <div className="centerText">
          <Card.Content>
            <Card.Header className="cardHeader">{producto.title}</Card.Header>
            <Card.Meta>{producto.description}</Card.Meta>
            <Image className="img" src={producto.picture} />
            <div className="precio">
              <Card.Description>${producto.price}</Card.Description>
            </div>
          </Card.Content>
        </div>
      </Card>
    </div>
    </Link>

  );
};
