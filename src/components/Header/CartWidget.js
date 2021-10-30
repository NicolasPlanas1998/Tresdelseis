import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link} from "react-router-dom";

export const CartWidget = () => {
    
    const { calcularCantidad } = useContext(CartContext)
    console.log(calcularCantidad())

    return (
        <div className="container__cart">
            <Link className="cart__link"to="/cart">
                <i className="fas fa-shopping-cart" id="cart" ></i>
                <span>{calcularCantidad()}</span>
            </Link>
        </div>
    )
}