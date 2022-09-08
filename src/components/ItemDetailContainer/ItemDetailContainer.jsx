import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//style
import "./ItemDetailContainer.css";

//components
import products from "../products/ItemProducts";
import ItemDetail from "../ItemList/ItemList";

function ItemDetailContainer() {
  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getData.then((res) => SetProducts(res));
  }, []);

  return (
    <div className="ItemDetailContainer">
      {Products.map((product) => {
        return (
          <div className="ItemDetailContainer" key={product.id}>
            {/* <Link className="Link" to={`/detail/${product.id}`}> */}
            <ItemDetail product={product} />
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default ItemDetailContainer;
