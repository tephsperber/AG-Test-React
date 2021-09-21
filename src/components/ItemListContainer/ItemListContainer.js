import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { db } from "../../firebase";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);

  console.log("PRODUCTOS", productsList);

  const getProducts = () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsList(docs);
    });
  };

  const getProduct = () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      const filteredProduct = docs.filter((product) => {
        return product.id === "LroK6ifuWU0ipuGP7Oyc";
      });

      console.log(filteredProduct);

      setProductsList(filteredProduct);
    });
  };

  const getCabaCategory = () => {
    db.collection("products")
      .where("category", "==", "CABA")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductsList(docs);
      });
  };
  const getGbaCategory = () => {
    db.collection("products")
      .where("category", "==", "GBA")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductsList(docs);
      });
  };

  useEffect(() => {
    getProduct();
    getProducts();
    getCabaCategory();
    getGbaCategory();
  }, []);

  return (
    <div>
      <ItemList items={productsList} key={productsList.id} />
    </div>
  );
};
export default ItemListContainer;
