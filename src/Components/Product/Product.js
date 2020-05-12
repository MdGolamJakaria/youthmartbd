import React from "react";
import "../Product/Product.css";
const Product = (props) => {
  console.log(props);
  const productDetailsHandelar = () => {
    alert("Developer busy.");
  };
  return (
    <div className="col-4">
      <div className="product-box">
        <img src={props.product.image} alt="" />
        <h3>{props.product.name}</h3>
        <h6>Brand : {props.product.brand}</h6>
        <h6>Category : {props.product.category}</h6>
        <h6>Bulk Price : {props.product.bulkPrice}</h6>
        <h6>Buying Price : {props.product.buyingPrice}</h6>
        <h6>Quantity : {props.product.quantity}</h6>
        <h6>Dhaka Quantity : {props.product.dhakaQuantity}</h6>
        <h6>Narsingdi Quantity : {props.product.narsingdiQuantity}</h6>
        <h6>Selling Price: {props.product.salePrice}</h6>
        <button onClick={productDetailsHandelar} className="btn btn-primary">
          More Details
        </button>
      </div>
    </div>
  );
};

export default Product;
