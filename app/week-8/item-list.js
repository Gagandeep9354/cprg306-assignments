"use client"

import React, { useState } from "react";
import Item from './item'


function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedArray = [...items].sort((a, b) => {
            if (sortBy === 'name') {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }
            else if (sortBy === 'category') {
                if (a.category < b.category) return -1;
                if (a.category > b.category) return 1;
                return 0;
            }
        })
    
    
    return(
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <div className="flex items-center gap-5 m-3">
            <p>Sort By: </p>
            <button
            onClick={() => setSortBy("name")}
            className={`p-2 ${
                sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'
            }`}>
                Sort By Name
            </button>
            <button
            onClick={() => setSortBy("category")}
            className={`p-2 ${
                sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'
            }`}>
                Sort By Category
            </button>
        </div>
        <ul className="text-white">
            {sortedArray.map((item, index) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
                ))}
        </ul>
        </div>
    )
}

export default ItemList