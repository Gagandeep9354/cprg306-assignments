"use client"

import React, { useState } from 'react';

function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(quantity + 1);

    const decrement = () => setQuantity(quantity- 1);

    return(
        <main className="flex justify-center">
        <div className= "flex flex-col justify-center items-center w-38 bg-white p-1">
            <p className="text-black">Current Quantity: {quantity}</p>
            <div className="flex justify-between items-center">
            <button onClick={decrement} className="bg-blue-600 hover:bg-blue-500 rounded-lg disabled:bg-slate-400 w-8" disabled={quantity===1}>-</button><br />
            <button onClick={increment} className="bg-blue-600 hover:bg-blue-500 rounded-lg disabled:bg-slate-400 w-8 ml-1" disabled={quantity===20}>+</button>
            </div>
        </div> 
        </main>      
    )
}


export default NewItem