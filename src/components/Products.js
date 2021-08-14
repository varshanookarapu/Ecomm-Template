import React from "react";

const Products = (props) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {props.products.map((prod) => {
          return (
            <div className="product-item" key={prod.name}>
              <div className="product-img"> </div>

              <div className="label">
                <label>{prod.name}</label>
                <button id="prodbtn">Add to Cart {prod.price}$</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
