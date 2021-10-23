import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import {stock} from "../../data/stock"
import { ItemList } from "./ItemList";


export const ItemListContainer = () =>{

    const [loading, setLoading] = useState(true)
    const [items, setItem] = useState([])
    const {categoryId} = useParams()
    // document.getElementById('header').style.position = 'relative';

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
                if(categoryId){
                    setItem(res.filter (prod => prod.product === categoryId))

                } else {
                    setItem(res)
                }
                
            })
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))
        },[categoryId])
    return (
        <div>
            {loading ?<h2>Cargando..</h2>: <ItemList productos ={items}/>}
        </div>
    )
}
