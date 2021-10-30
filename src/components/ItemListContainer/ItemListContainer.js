import React, { useEffect,useState,useContext } from "react";
import { useParams } from "react-router";
import { UIContext } from "../../context/UIContext";
import {stock} from "../../data/stock"
import { getFirestore } from "../../firebase/config";
import { ItemList } from "./ItemList";


export const ItemListContainer = () =>{

    const {loading, setLoading} = useContext(UIContext)
    const [items, setItem] = useState([])
    const {categoryId} = useParams()

    // const request = () =>{
    //     return new Promise((res,rej) =>{
    //         setTimeout(()=>
    //             res(stock)
    //         ,2000)
    //     })
    // }
    useEffect(() =>{

        const db = getFirestore()
        const itemCollection = db.collection ('productos')

        if(categoryId) {
            const filtrado = itemCollection.where('category','==', categoryId)
            filtrado.get()
            .then((res) => {
                const newItems = res.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setItem(newItems)
            })
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))
        } else {
        
        itemCollection.get()
            .then((res) => {
                const newItems = res.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setItem(newItems)
            })
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))
        // request()
        //     .then((res) => {               
        //         if(categoryId){
        //             setItem(res.filter (prod => prod.product === categoryId))

        //         } else {
        //             setItem(res)
        //         }
                
        //     })
        //     .catch((err) => console.log(err))
        //     .finally(()=> setLoading(false))
        }
        },[categoryId])
    return (
        <div>
            {loading ?<div className="loading"></div>: <ItemList productos ={items}/>}
        </div>
    )
}
