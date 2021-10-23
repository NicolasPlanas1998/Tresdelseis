import React from "react";
import background from '../../imagenes/homeview.jpg';
import './homeview.css';

export const HomeView = () => {
    document.getElementById('header').style.position = 'absolute';
    return(
        <>
            <img className="background" alt="plants background" src={background}/>
        </>
    )
}