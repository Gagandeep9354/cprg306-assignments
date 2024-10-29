"use client"

import React, { useState } from 'react';
import ItemList from './item-list'
import NewItem from './new-item';
import itemsData from './item.json';


export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }
    return(
        <>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items}/>
        </>
    );
}