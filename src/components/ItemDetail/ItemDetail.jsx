import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div className="Item">
      <img src={product.images} alt="product" />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <div className="AddToCart">
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ItemDetail;
