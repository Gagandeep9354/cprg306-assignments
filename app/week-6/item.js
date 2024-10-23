import React from "react";


function Item({name, quantity, category}) {
    return(
        <li className="list-none bg-slate-900 m-4 p-1 max-w-sm">
            <h1 className="text-xl font-bold">{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </li>
    )
}

export default Item