import React from "react";


function Item({id,  name, quantity, category, onSelect, onDelete}) {
    return(
                <li className="flex justify-between items-center list-none bg-slate-900 m-4 p-2 max-w-sm  active:bg-orange-700" onClick={() => onSelect(name)}>
                    <div>
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p>Buy {quantity} in {category}</p>
                    </div> 
                    <button className="bg-red-600 hover:bg-red-800 p-2 h-10 rounded-lg" onClick={() => onDelete(id)}>Delete</button>
                </li> 
    )
}

export default Item