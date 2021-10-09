import React from "react";

export const NavBar = () =>{
    return(
        <ul className="navBar">
            <li className="navBar__li">INICIO</li>
            <li className="navBar__li">PRODUCTOS
                <ul className="navBar__subBar">
                    <li>VESTIDOS</li>
                    <li>PANTALONES</li>
                </ul>
            </li>
            <li className="navBar__li">NUEVO</li>
            <li className="navBar__li">SALE</li>
            <li className="navBar__li">CONTACTO</li>
        </ul>
    )
}

