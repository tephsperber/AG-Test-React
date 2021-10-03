import React, { useState } from "react";
import "./ItemDetail.css";
import { Card, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export function ItemDetail({ item }) {
  const { addToCart, realStock } = useCartContext();
  const [addItem, setAddItem] = useState(false);

  const onAdd = (count) => {
    addToCart(item, count);
    setAddItem(true);
  };
  return (
    <div className="grid">
      <div className="itemDetail">
        <Card.Header className="cardHeaderItem">{item.title}</Card.Header>
        <div className="imgItem">
          <img src={item.img} alt="foto" />
        </div>
        <div className="cardItemDetail">
          <Card.Description className="cardTitleItem">
            {item.description}
          </Card.Description>
          <Card.Description className="cardDescriptionItem">
            Precio correspondiente a domicilio dentro de
            <span className="spanItem"> {item.category}</span> .
          </Card.Description>
          <Card.Meta className="cardPriceItem">
            <div className="textPrice">${item.price}</div>
          </Card.Meta>
        </div>

        <div className="itemCount">
          <ItemCount stock={realStock(item)} initial={1} onAdd={onAdd} />

          {addItem ? (
            <div className="added">
              <p> Has agregado los Test seleccionados a tu carrito</p>
              <div className="buttonsDetail">
                <Link to="/">
                  <Button color="teal">Seleccionar Otro Test</Button>
                </Link>
                <Link to="/cartview">
                  <Button color="black">Finalizar Compra</Button>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
