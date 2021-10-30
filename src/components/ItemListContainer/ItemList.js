import React from "react";
import {Item} from "./Item"

export const ItemList= ({productos = []}) =>{
    return  (
        <div>
            <h2 className="title__section">Nuestros Productos</h2>
            <div className= "row container-fluid">
                {productos.map((item)=><Item {...item} key={item.id}/>)}
            </div>
        </div>
    )
}