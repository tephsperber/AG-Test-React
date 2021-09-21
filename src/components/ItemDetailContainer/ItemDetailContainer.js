import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../firebase";

const ItemDetailContainer = () => {
  const [productsDetail, setProductsDetail] = useState([]);

  console.log("PRODUCTOS", productsDetail);

  const getProducts = () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsDetail(docs);
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

      setProductsDetail(filteredProduct);
    });
  };

  useEffect(() => {
    getProduct();

    getProducts();
  }, []);

  return (
    <div>
      {productsDetail.map((item) => {
        return <ItemDetail item={productsDetail} key={productsDetail.id} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
