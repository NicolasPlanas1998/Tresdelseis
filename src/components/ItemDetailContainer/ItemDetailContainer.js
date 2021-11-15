import React, {useEffect,useState , useContext} from "react";
import { useParams } from "react-router";
// import {stock} from "../../data/stock"
import {ItemDetail} from "./ItemDetail";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";




export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const {loading, setLoading} = useContext(UIContext)

    const {productId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(productId)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [productId, setLoading])

    return (
        <div>
            {
                loading 
                ? <div className="loading"></div>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}