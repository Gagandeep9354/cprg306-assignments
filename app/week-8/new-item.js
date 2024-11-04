"use client"

import React, { useState } from 'react';

function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = () => setQuantity(quantity + 1);

    const decrement = () => setQuantity(quantity- 1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { id : Math.random().toString(36).substr(2, 9), name, quantity, category };
        console.log(item);
        onAddItem(item);
        setQuantity(1);
        setName("");
        setCategory("Produce");
    }

    return(
        <main className="flex justify-center">
        
            <form onSubmit={(e) => handleSubmit(e)}>
            <input
            type="text"
            className="rounded-lg w-full p-3 mb-3 text-black text-xl"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
            placeholder="Item name"
            required
            />
            <div className="flex gap-20 mb-3">
            <div className="flex justify-between bg-white text-black p-2 rounded-lg w-32">
            <p>{quantity}</p>
                <div className="flex gap-1">
                <button type="button" onClick={decrement} className="bg-blue-600 hover:bg-blue-500 rounded-lg disabled:bg-slate-400 w-8" disabled={quantity===1}>-</button><br />
                <button type="button" onClick={increment} className="bg-blue-600 hover:bg-blue-500 rounded-lg disabled:bg-slate-400 w-8 ml-1" disabled={quantity===20}>+</button>
            </div>
            </div>
            <select onChange={(e) => setCategory(e.target.value)} className="rounded-lg text-black p-3">
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
            </div>

            <button type="submit" className="rounded-lg p-2 bg-blue-500 hover:bg-blue-700 w-full">Add Item</button>
            </form>
       
        </main>      
    )
}


export default NewItem