import React,{useContext, useState} from 'react'
import productos from '../../imagenes/productos';
import './itemDetail.css';
import {ItemCounter} from "../ItemCounter/ItemCounter";
import {CartContext} from '../../context/CartContext';
import {Link } from "react-router-dom";

export const ItemDetail = ({id, name, price,talle,product,color1,color2,color3}) =>{

    const {addToCart, isInCart} = useContext(CartContext)
    const [cantidad, setQuantity] = useState(0)



    const handleAgregar =() => {
        const newItem ={
        id,
        name,
        price,
        product,
        cantidad
    }
    if(cantidad > 0){
        addToCart(newItem)
    }
}

    return (   
    <div className="container-fluid detail">
        <img className="model" src={productos[id]} alt={name} />  
        <div className="container__detail">
            <div className="container__detail--title">
                <h1>{name}</h1>
                <div className="calification">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <hr/>
            </div>
            <div className="container__detail--text">
                <div className="text__item">
                    <h6 className="text_h6">Talle</h6>
                    <p className="text_p">{talle}</p>
                </div>
                <div className="text__item">
                    <h6 className="text_h6">Colores Disponibles</h6>
                    <input  className="color" type="color" value= {color1} disabled/>
                    <input  className="color" type="color" value= {color2} disabled/>
                    <input  className="color" type="color" value= {color3} disabled/>
                    <ItemCounter cantidad={cantidad} modify={setQuantity}/> 
                    
                </div>
                <div className="text__item">
                <h6 className="text_h6">Precio</h6>
                <p className="text_p"> $ {price}</p>
                {isInCart(id)
                    ? (
                    <>
                        <button className="btn btn-success" >
                            <i className="far fa-check-circle">Agregado</i>
                        </button>
                        <Link to="/cart">
                            <button className="btn btn-warning " >
                                <i className="far fa-check-circle">Terminar mi compra</i>
                            </button>
                        </Link>
                    </>
                    ): (
                    <>                 
                        <button className="btn btn-success btn-detail" onClick={handleAgregar}>Agregar al Carrito
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </>
                    )
                    }
                </div>
            </div>
        </div>
    </div>
    )
}



