import React from "react";
import "./ItemDetail.css";
import { Card, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export function ItemDetail({ items }) {
  const { addToCart, removeItem, clear, realStock } = useCartContext();
  const onAdd = (count) => {
    addToCart(items, count);
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
        <div>
          <p> Has agregado {onAdd} test al carrito</p>
        </div>
        <ItemCount stock={realStock} initial={1} onAdd={onAdd} />
        <div className="buttonsRemoveClear">
          <Button onClick={removeItem}>Eliminar Test</Button>
          <Button onClick={clear}>Vaciar Carrito</Button>
        </div>
        <Link to="/cartview">
          <Button>Termina tu compra</Button>
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
