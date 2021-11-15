import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link} from "react-router-dom";

export const CartWidget = () => {
    
    const { calcularCantidad } = useContext(CartContext)
    console.log(calcularCantidad())

    return (
        <div className="widget">
            <Link className="widget__link" to="/cart">
                <i className="fas fa-shopping-cart icon" ></i>
                <span class="cantidad">{calcularCantidad()}</span>
            </Link>
        </div>
    )
}