import React from "react";
import {
    Link,
    NavLink
} from "react-router-dom";

export const NavBar = () =>{


    return(
        <ul className="navBar">
            <Link className="navBar__li" to='/'>INICO</Link>
            <NavLink className="navBar__li deploy" activeClassName={'activeLink'} to='/productos'>PRODUCTOS
                    <ul className="navBar__subBar ">
                        <Link className="options" to='/productos/camisa'>Camisa</Link>
                        <Link className="options" to='/productos/chaqueta'>Chaquetas</Link>
                        <Link className="options" to='/productos/vestido'>Vestidos</Link>
                    </ul>
            </NavLink>
            <NavLink className="navBar__li" activeClassName={'activeLink'} to='/nuevo'>NUEVO</NavLink>
            <NavLink className="navBar__li" activeClassName={'activeLink'} to='/contacto'>CONTACTO</NavLink>
        </ul>
    )
}

