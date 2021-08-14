import React from "react";

const Products = () => {
  return (
    <div className="products">
      <h1>Products</h1>

      <div className="product-item">
        <div className="product-img"> </div>

        <div className="label">
          <label>Name</label>
          <button id="prodbtn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
