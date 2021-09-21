import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getItemFiltered(itemId).finally(() => setLoading(false));
  }, [itemId]);

  const getItemFiltered = async (id) => {
    const docs = [];
    const q = query(collection(db, "products"), where(documentId(), "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItemDetail(docs);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {itemDetail.map(() => {
        return <ItemDetail item={itemDetail} key={itemDetail.id} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
