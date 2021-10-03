import React, { useState } from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc, onSnapshot, Timestamp } from "firebase/firestore";
import { Button, Image } from "semantic-ui-react";
import { useCartContext } from "../../context/CartContext";

const CheckOut = () => {
  const { cart, clear, totalPrice } = useCartContext();

  const [buyer, setBuyer] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderSubmited, setOrderSubmited] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    const buyerInfo = { name: name, phone: phone, email: email };
    setBuyer(buyerInfo);
  };

  const handleSubmit = () => {
    const buyerInfo = buyer;
    setBuyer(buyerInfo);
    setName("");
    setPhone("");
    setEmail("");
  };

  const products = cart;
  const date = new Date();
  const hour = Timestamp.fromDate(new Date()).toDate();
  const orderDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}-${hour}`;

  class OrderSubmited {
    constructor(orderDate, buyer, products, total) {
      this.orderDate = orderDate;
      this.buyer = buyer;
      this.products = products;
      this.total = total;
    }
    toString() {
      return (
        this.orderDate +
        ", " +
        this.buyer +
        ", " +
        this.products +
        ", " +
        this.total
      );
    }
  }

  var orderFirestore = {
    toFirestore: (orderSubmited) => {
      return {
        orderDate: orderSubmited.orderDate,
        buyer: orderSubmited.buyer,
        products: orderSubmited.products,
        total: orderSubmited.total,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new OrderSubmited(
        data.orderDate,
        data.buyer,
        data.products,
        data.total
      );
    },
  };

  const addProduct = async (e) => {
    e.preventDefault();
    await addDoc(
      collection(db, "orders").withConverter(orderFirestore),
      new OrderSubmited(orderDate, buyer, products, totalPrice)
    );
    onSnapshot(
      collection(db, "orders").withConverter(orderFirestore),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setOrderSubmited(doc.id);
          clear();
        });
      }
    );
  };

  return (
    <div>
      {orderSubmited !== "" ? (
        <div className="orderId">
          <p className="orderIdText">
            El código de tu orden es
            <span className="orderIdSpan">{orderSubmited}</span>
          </p>
          <p className="orderIdText">Muchas gracias por su compra.</p>
          <Link to="/contact">
            <p className="orderIdContact">Por consultas hacer click aquí. </p>
          </Link>
          <div className="centerCO">
            <Link to="/">
              <Button color="black">Volver al Inicio</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1>Resumen de Compra</h1>
          <div className="grid">
            {cart.map((item) => {
              return (
                <div key={item.id} className="itemsCheckOut">
                  <h2>{item.title}</h2>
                  <Image className="img" src={item.img} />
                  <p className="checkOutP">
                    <span className="checkOutSpan">
                      Cantidad Seleccionada:{" "}
                    </span>
                    {item.quantity}
                  </p>
                  <p className="checkOutP">
                    <span className="checkOutSpan">Precio por test:</span> ${" "}
                    {item.price}{" "}
                  </p>
                  <p className="checkOutP">
                    <span className="checkOutSpan">Precio total:</span> ${" "}
                    {item.price * item.quantity}
                  </p>
                </div>
              );
            })}
          </div>

          <h2 className="totalPrice">
            Total: <span className="spanTotalPrice">$ {totalPrice}</span>
          </h2>

          <div>
            <h1>Complete sus datos</h1>
            <form onSubmit={handleSubmit} className="form">
              <p>
                <label htmlFor="Nombre">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Escriba su nombre y apellido"
                  required
                  onChange={handleOnChange}
                />
              </p>

              <p>
                <label htmlFor="Teléfono">Teléfono:</label>
                <input
                  type="telephone"
                  name="phone"
                  id="phone"
                  value={phone}
                  placeholder="Escriba su teléfono"
                  required
                  onChange={handleOnChange}
                />
              </p>
              <p>
                <label htmlFor="Correo">Correo electrónico:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Escriba su correo"
                  onChange={handleOnChange}
                />
              </p>

              <div>
                <Link to="/cartview">
                  <Button color="black">Volver al Carrito</Button>
                </Link>
                <Button color="teal" onClick={addProduct}>
                  Iniciar Compra
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
