import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Item.css";
import { useCartContext } from "../../context/CartContext";

export const Item = ({ producto }) => {
  const { addToCart } = useCartContext();
  const onAdd = (count) => {
    addToCart(producto, count);
  };
  return (
    <div className="card">
      <Card>
        <div className="centerText">
          <Card.Content>
            <Link to={`/detail/${producto.id}`}>
              <Card.Header className="cardHeader">{producto.title}</Card.Header>
              <Card.Meta>{producto.description}</Card.Meta>
              <Image className="img" src={producto.picture} />
              <div className="precio">
                <Card.Description>${producto.price}</Card.Description>
              </div>
            </Link>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
          </Card.Content>
        </div>
      </Card>
    </div>
  );
};
