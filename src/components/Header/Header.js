import React from "react"
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { CartWidget } from "./CartWidget";
import logo from '../../imagenes/tresdelseis.png'
import './header.css';
import {Link} from "react-router-dom";

export const Header = () =>{
    return (
        <div className="header active-navbar" id="header">
            <nav className="container__navBar">
                <NavBar/>
            </nav>
            <Link to='/'>
                <img alt="Logo de la empresa" id="logo" src={logo}/>
            </Link>
            <div className="container__widgets">
                <Search/>
                <CartWidget/> 
            </div>
        </div>
    )
}
