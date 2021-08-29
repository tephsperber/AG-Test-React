import React, { useState } from "react";
import "./ItemDetail.css";
import { Card, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export function ItemDetail({ items }) {
  const [onAdd, setOnAdd] = useState(0);

  const onAddClickDetail = (quantityToAdd) => {
    setOnAdd(quantityToAdd);
  };

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
        {onAdd ? (
          <div>
            <p> Has agregado {onAdd} test al carrito</p>
            <Link to="/cart">
              <Button>Termina tu compra</Button>
            </Link>
          </div>
        ) : (
          <ItemCount stock={items.stock} initial={1} onAdd={onAddClickDetail} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
