import React from "react"
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { CartWidget } from "./CartWidget";
import { User } from "./User";
import logo from '../../imagenes/tresdelseis.png'
import './header.css';
import {Link} from "react-router-dom";
import { HomeView } from "../HomeView/HomeView";

export const Header = () =>{
    return (
        <div className="header active-navbar" id="header">
            <nav className="container__navBar">
                <i class="fas fa-bars hamburger"></i>
                <NavBar/>
            </nav>
            <Link to='/'>
                <img alt="Logo de la empresa" id="logo" src={logo}/>
            </Link>
            <div className="container__widgets">
                <User/>
                <Search/>
                <CartWidget/>
            </div>
        </div>
    )
}
