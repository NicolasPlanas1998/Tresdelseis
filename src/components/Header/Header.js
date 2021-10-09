import React from "react"
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { CartWidget } from "./CartWidget";
import logo from '../../img/tresdelseis.png'
import './header.css';

export const Header = () =>{
    return (
        <div className="header">
            <nav className="container__navBar">
                <NavBar/>
            </nav>
            <img alt="Logo de la empresa" id="logo" src={logo}/>
            <div className="container__widgets">
                <Search/>
                <CartWidget/> 
            </div>
        </div>
    )
}
