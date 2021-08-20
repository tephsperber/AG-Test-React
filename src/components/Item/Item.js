import React from "react";

//Import Card and Image
import { Card, Image } from "semantic-ui-react";

//Import css
import "./Item.css";

//Import Component
import ItemCount from "../ItemCount/ItemCount";

export const Item = ({ producto }) => {
  return (
    <div className="card" >
      <Card>
      <div className="centerText">
        <Card.Content>
            <Card.Header className="cardHeader">{producto.title}</Card.Header>
            <Card.Meta >{producto.description}</Card.Meta>
          <Image className="img" src={producto.picture} />
          <div className="precio">
            <Card.Description>${producto.price}</Card.Description>
            </div>
        </Card.Content>
        </div>
        <div>
          <ItemCount
            stock={producto.stock}
            initial={0}
            onAdd={(count) =>
              console.log("Agregaste", count, "productos al carrito")
            }
          />
        </div>
      </Card>

    </div>
  );
};
