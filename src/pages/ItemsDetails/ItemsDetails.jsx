import React, { useEffect, useState } from "react";
import axios from "axios";
import products from "../../components/products/ItemProducts";
import { useParams } from "react-router-dom";

//components
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetails = () => {
  let { id } = useParams();

  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 0);
    });
    getData.then((res) => SetProducts(res));
  }, [id]);

  return (
    <div>
      {Products.map((prod) => {
        return <ItemDetail product={prod} />;
      })}
    </div>
  );
};

export default ItemDetails;
