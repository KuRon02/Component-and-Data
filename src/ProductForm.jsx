import React, { useState } from "react";
import OrderInfo from "./OrderInfo";

function ProductForm() {

    const [counter, setCounter] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState('AMD Ryzen 5 3600');

    const products = {
        "AMD Ryzen 5 3600": 245,
        "AMD Ryzen 7 7800": 500,
        "AMD Ryzen 5 5600": 125,
        "Intel Core i5-14400F": 182
    };

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
      };    

    const incrementCounter = () => {
        setCounter(counter + 1);
    };
        
    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <div class="component">
        <div class="product">
            <h1>Select product</h1>
            <div class="select_product">
                <label for="prodcut-name">Product:</label>
                <select class="product-names" id="product-names" onChange={handleProductChange}>
                    {Object.keys(products).map(product => (
                    <option key={product} value={product}>{product} ({products[product]}€)</option>
                ))}
                </select>
            </div>
            <div class="select_quantity">
                <label for="quantity">Quantity:</label>
                <button onClick={decrementCounter}>-</button>
                <h3 id="quantity">{counter}</h3> 
                <button onClick={incrementCounter}>+</button>
            </div>
        </div>
        <OrderInfo product={selectedProduct} quantity={counter} price={products[selectedProduct]}/>
        </div>
    );
}

export default ProductForm;