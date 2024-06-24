import React, { useContext } from "react";
import "./ProductDisplay.css";
import start_icon from "../../assets/star_icon.png";
import start_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-imgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className="product-display-mainImg" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-rightStars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="product-display-rightPrices">
          <div className="product_display-rightPrices-old">
            ${product.old_price}
          </div>
          <div className="product_display-rightPrice-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="product-display-rightSize">
          <h1>Select Size</h1>
          <div className="product-display-rightSizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className="product-display-rightCategory">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-rightCategory">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
