import React from "react";

export const NavBar = () =>{
    return(
        <ul class="navBar">
            <li class="navBar__li">INICIO</li>
            <li class="navBar__li"><a>PRODUCTOS</a>
                <ul class="navBar__subBar">
                    <li>VESTIDOS</li>
                    <li>PANTALONES</li>
                </ul>
            </li>
            <li class="navBar__li">NUEVO</li>
            <li class="navBar__li">SALE</li>
            <li class="navBar__li">CONTACTO</li>
        </ul>
    )
}
export const CartWidget = () =>{
    return <i class="fas fa-shopping-cart" id="cart"></i>
}
export const Search = () =>{
    return (
    <div class="container__searcher">
        <i class="fas fa-search">  
            <input type="search" placeHolder="Buscar" id="search"></input>
        </i>
    </div>
    )
}