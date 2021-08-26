import React from "react";
import "./ItemDetail.css";
import { Card } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";

export function ItemDetail({ items }) {
  return (
    <div className="centerItem">
      <div className="itemDetail">
        <div className="imgItem">
          <img src={items.picture} alt="foto" />
        </div>
        <div className="cardItemDetail">
          <Card.Header className="cardHeaderItem">{items.title}</Card.Header>
          <Card.Description className="cardDescriptionItem">
            {items.description}
          </Card.Description>
          <Card.Description className="cardDescriptionItem">
            {items.certificate}
          </Card.Description>
          <Card.Description className="cardDescriptionItem">
            Precio correspondiente a domicilio dentro de
            <span className="spanItem"> {items.location}</span> .
          </Card.Description>
          <Card.Meta className="cardPriceItem">
            <div className="textPrice">${items.price}</div>
          </Card.Meta>
        </div>
      </div>
      <div className="itemCount">
        <ItemCount
          stock={items.stock}
          initial={0}
          onAdd={(count) =>
            console.log("Agregaste", count, "productos al carrito")
          }
        />
      </div>
    </div>
  );
}

export default ItemDetail;
