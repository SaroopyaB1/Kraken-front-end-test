import React, { useState } from "react";
import { ProductType } from "../types";
import basket from "../public/basket.svg";
import octopusLogo from "../public/octopus-logo.svg";

interface ProductProps {
  product: ProductType;
}
const Product: React.FC<ProductProps> = ({ product }) => {
  let [count, setCount] = useState(1);
  let [cartValue, setCartValue] = useState(1);
  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };

  const decrementCount = () => {
    if (count >= 1) {
      count = count - 1;
      setCount(count);
    }
  };

  const addToCart = () => {
    setCartValue(count);
  };

  const priceValue = (val: number) => {
    return (
      val.toString().substring(0, val.toString().length - 2) +
      "." +
      val.toString().substring(val.toString().length - 2)
    );
  };

  return (
    <div className="products">
      <div className="product-image-elements">
        <div className="images">
          <div className="logo">
            <img src={octopusLogo.src} alt="octopus-energy-logo" />
          </div>
          <div className="basket">
            <img src={basket.src} alt="basket" />
            <p className="basket-value" title="Basket items">
              {cartValue}
            </p>
          </div>
        </div>
        <div>
          <img
            className="product-image"
            src={product.img_url}
            style={{ height: 400, width: "100%" }}
            alt="bulb"
          />
          <div className="product-power-description">
            <p className="product-name">{product.name}</p>
            <span>{product.power} /</span>{" "}
            <span>Packet of {product.quantity}</span>
          </div>
        </div>
        <div className="product-quantity">
          <div>
            <p>&#163;{priceValue(product.price)}</p>
          </div>
          <div className="action-buttons">
            <button className="minus" onClick={decrementCount} aria-label="minus">
              -
            </button>
            <div className="quantity">
              <p className="quantity-text">Qty</p>
              <p className="quantity-number" title="Current quantity">
                {count}
              </p>
            </div>
            <button className="plus" onClick={incrementCount} aria-label="plus">
              +
            </button>
          </div>
        </div>
        <div className="cart-button">
          <button onClick={addToCart} aria-label="Add to cart">Add to cart</button>
        </div>
      </div>
      <div className="product-description">
        <h5>Description</h5>
        <div className="product-description-text">
          <p>{product.description}</p>
        </div>
      </div>
      <div className="product-specifications">
        <h5>Specifications</h5>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <span>Brand</span>
                </td>
                <td>
                  {" "}
                  <span>{product.brand}</span>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span>Item weight (g)</span>
                </td>
                <td>
                  {" "}
                  <span>{product.weight}</span>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span>Dimensions (cm)</span>
                </td>
                <td>
                  {" "}
                  <span>
                    {product.height} x {product.weight} x {product.length}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span>Item Model number</span>
                </td>
                <td>
                  {" "}
                  <span>{product.model_code}</span>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span>Colour</span>
                </td>
                <td>
                  {" "}
                  <span>{product.colour}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="product-description">
        <p title="footer">
          Octopus Energy Ltd is a company registered in England and Wales.
          Registered number: 09263424. Registered office: 33 Holborn, London,
          EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT.
        </p>
      </div>
    </div>
  );
};

export default Product;
