import React, { useState } from "react";

export default function ProductForm() {

    const [counter, setCounter] = useState(0);
        
    const incrementCounter = () => {
        setCounter(counter + 1);
    };
        
    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <div class="product">
            <h1>Select product</h1>
            <div class="select_product">
                <label for="prodcut-name">Product:</label>
                <select class="product-names" id="product-names">
                    <option value="AMD Ryzen 5 3600" key="245">AMD Ryzen 5 3600 (245€)</option>
                    <option value="AMD Ryzen 7 7800">AMD Ryzen 7 7800 (500€)</option>
                    <option value="AMD Ryzen 5 5600">AMD Ryzen 5 5600 (125€)</option>
                    <option value="Intel Core i5-14400F">Intel Core i5-14400F (182€)</option>
                </select>
            </div>
            <div class="select_quantity">
                <label for="quantity">Quantity:</label>
                <button onClick={decrementCounter}>-</button>
                <h3 id="quantity">quantity is: {counter}</h3> 
                <button onClick={incrementCounter}>+</button>
            </div>
        </div>
    );
}