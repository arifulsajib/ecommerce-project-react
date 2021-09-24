import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch("./products.json")
        .then(res => res.json())
        .then(data =>setProducts(data));
    },[]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const savedProducts = [];
        if(products.length){
            for (const key in savedCart) {
                const quantity = savedCart[key]
                const savedProduct = products.find(product => product.key === key);
                if(savedProduct){
                    savedProduct.quantity = quantity;
                    savedProducts.push(savedProduct);
                }
                setCart(savedProducts);
            }
        }
    },[products]);

    const handleAddToCart = (product) =>{
        const checkAlreadyAdded = cart.find(addedProduct => product.key === addedProduct.key);
        if(!checkAlreadyAdded){
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
            addToDb(product.key);
        } else {
            checkAlreadyAdded["quantity"] += 1;
            const updatedCart = [...cart];
            setCart(updatedCart);
            addToDb(product.key);
        }
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;