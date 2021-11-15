import React, { useEffect,useState,useContext } from "react";
import { useParams } from "react-router";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";
import { ItemList } from "./ItemList";


export const ItemListContainer = () =>{

    const {loading, setLoading} = useContext(UIContext)
    const [items, setItem] = useState([])
    const {categoryId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const db = getFirestore()
        console.log(db)
        const productos = categoryId 
                            ? db.collection('productos').where('product', '==', categoryId)
                            : db.collection('productos')

        productos.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })

                setItem(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )
        
    }, [categoryId, setLoading])
    return (
        <div>
            {loading ?<div className="loading"></div>: <ItemList productos ={items}/>}
        </div>
    )
}
