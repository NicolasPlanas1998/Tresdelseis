import React, { useEffect } from "react";
import {stock} from "../../data/stock"
import { useState } from "react";
import { ItemList } from "./ItemList";


export const ItemListContainer = () =>{

    const [loading, setLoading] = useState(true)
    const [items, setItem] = useState([])

    const request = () =>{
        return new Promise((res,rej) =>{
            setTimeout(()=>
                res(stock)
            ,2000)
        })
    }
    useEffect(() =>{
        request()
            .then((res) => {
                setLoading(false)
                setItem(res)
                
            })
            .catch((err) => console.log(err))
        })
    return (
        <div>
            {loading ?<h2>Cargando..</h2>: <h3><ItemList productos ={items}/></h3>}
        </div>
    )
}
