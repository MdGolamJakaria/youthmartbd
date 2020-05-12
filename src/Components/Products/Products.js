import React from "react";
import products from "../../fackData/productsData";
import Product from "../Product/Product";

const Products = () => {
  console.log(products);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h3>Products Details For Sellers:</h3>
        </div>
        <div className="row">
          {products.map((pd) => (
            <Product key={pd.id} product={pd}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
