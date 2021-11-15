import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)

    // Vista de los producctos seleccionados
    return (
        <div className="container target">
            {
                carrito.length === 0 
                ? <>
                    <h2 className="h2_cart">No hay productos agregados</h2>
                    <Link to="/productos" className="btn btn-success">Ir a comprar</Link>                 
                </>
                : 
                    <>
                        <h2 className="h2_cart">Resumen de compra</h2>
                        <hr/>
                        {
                            carrito.map( (prod) => (
                                <div className="info__cart">
                                    <div>
                                        <h4>{prod.name}</h4>
                                        <p>Cantidad: {prod.cantidad}</p>
                                        <p>Precio: $ {prod.price * prod.cantidad}</p>
                                    </div>
                                    <button className="btn btn-danger fas fa-trash-alt" onClick={() => removeItem(prod.id)}>
                                    </button>
                                </div>
                            ))
                        }
                        <hr/>
                        <h3>Precio total: ${calcularTotal()}</h3>
                        <div className="info__cart">
                            <button className="btn btn-secondary" onClick={vaciarCarrito}> Vaciar carrito</button>
                            <Link to="checkout">    
                                <button className="btn btn-success"> Pagar</button>
                            </Link>
                        </div>
                    </>
            } 
        </div>
    )
}