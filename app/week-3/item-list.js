import React from "react";
import Item from './item'

function ItemList({name, quantity, category}) {
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };

    return(
      <>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <Item name={item1.name} category= {item1.category} quantity={item1.quantity}/>
        <Item name={item2.name} category= {item2.category} quantity={item2.quantity}/>
        <Item name={item3.name} category= {item3.category} quantity={item3.quantity}/>
        <Item name={item4.name} category= {item4.category} quantity={item4.quantity}/>
        <Item name={item5.name} category= {item5.category} quantity={item5.quantity}/>
        <Item name={item6.name} category= {item6.category} quantity={item6.quantity}/>
        <Item name={item7.name} category= {item7.category} quantity={item7.quantity}/>
        <Item name={item8.name} category= {item8.category} quantity={item8.quantity}/>
        <Item name={item9.name} category= {item9.category} quantity={item9.quantity}/>
        <Item name={item10.name} category= {item10.category} quantity={item10.quantity}/>
        <Item name={item11.name} category= {item11.category} quantity={item11.quantity}/>
        <Item name={item12.name} category= {item12.category} quantity={item12.quantity}/>
        </>
    )
}

export default ItemList