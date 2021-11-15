import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const generarOrden = (datos, carrito, total) =>{

    return new Promise(async (resolve, reject )=> {

        const order = {
            buyer:datos,
            items: carrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()), 
            total: total
        }

        // batch de actualizacion
        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(el => el.id))
            

        const query = await itemsToUpdate.get()
        const batch = db.batch()
        const outOfStock = []


        query.docs.forEach((doc) => {
            const itemInCart = carrito.find(prod => prod.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad})
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })
    
        // Enviando info a firestore
        if (outOfStock.length === 0){  
        orders.add(order)
            .then((res) => {
                batch.commit()
                resolve(res.id)
                
                // Crear una nueva vista que lleve al usuario a una pagina donde le diga que su compra fue realizada con exito
            })
            } else {
            reject(outOfStock)
        }
    })
}
