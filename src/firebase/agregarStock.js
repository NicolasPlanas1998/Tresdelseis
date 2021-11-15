import { getFirestore } from './config'
import 'firebase/firestore'

export const agregarStock = (datos) =>{
    
    return new Promise((resolve, reject )=> {

        const order =  datos
    
        // batch de actualizacion
        const db = getFirestore()

        const itemsToUpdate = db.collection('productos')

        const batch = db.batch()
     
            itemsToUpdate.add(order)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
            })
    })
}