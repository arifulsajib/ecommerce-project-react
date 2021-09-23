import React from 'react';
import"./Product.css";

const Product = (props) => {
    const{name, img, price, seller,stock} = props.product;
    return (
        <div className="product">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock-order soon</p>
                <button className="default-btn" onClick={()=>props.handleAddToCart(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;