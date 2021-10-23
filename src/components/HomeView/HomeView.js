import React from "react";
import background from '../../imagenes/homeview.jpg';
import './homeview.css';

export const HomeView = () => {

    const header = document.getElementById('header');
    header ? header.style.position = 'absolute' : null;

    return(
        <>
            <img className="background" alt="plants background" src={background}/>
        </>
    )
}