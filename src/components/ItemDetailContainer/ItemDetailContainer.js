import React, {useEffect,useState , useContext} from "react";
import { useParams } from "react-router";
// import {stock} from "../../data/stock"
import {ItemDetail} from "./ItemDetail";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";




export const ItemDetailContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const [detailItem, setItem] = useState([])
    const {productId} = useParams()
    const {categoryId} = useParams()
    


    // const request = () =>{
    //     return new Promise((res,rej) =>{
    //         setTimeout(()=>
    //             res(stock)
    //         ,1000)
    //     })
    // }   
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
            .catch((err) => console.log(err))   
            .finally(()=>setLoading(false))         
            

        // request()     
        //     .then((res) => {
        //         if(productId){
        //             setItem(res.filter(detail => detail.id === productId && detail.product === categoryId) )
        //         }
        //     })
        //     .catch((err) => console.log(err))
        //     .finally(()=>setLoading(false))

    },[productId])

    return(
        <div>
            {loading 
            ?
            <h2 className="loading"></h2>
            : 
            <div>
                {detailItem.map((item)=><ItemDetail {...item} key={item.id}/>)}
            </div>}
        </div>
    )
}

