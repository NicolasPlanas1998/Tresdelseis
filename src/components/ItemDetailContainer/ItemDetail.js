import React,{useContext, useState} from 'react'
import productos from '../../imagenes/productos';
import './itemDetail.css';
import {ItemCounter} from "../ItemCounter/ItemCounter";
import {CartContext} from '../../context/CartContext';
import {Link } from "react-router-dom";
import Swal from "sweetalert2";

export const ItemDetail = ({id, name, price,talle,product,color1,color2,img}) =>{

    const {addToCart, isInCart} = useContext(CartContext)
    const [cantidad, setQuantity] = useState(0)



    const handleAgregar =() => {
        const newItem ={
        id,
        name,
        img,
        price,
        product,
        cantidad
    }
    // Verificamos si verdaderamente fue posible agregar al carrito el producto
    if(cantidad > 0){
        addToCart(newItem)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })
        setQuantity(0)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor agregue la cantidad del producto',
    })
    }
}

    return (   
    <div className="container-fluid detail">
        <img className="model" src={productos[img]} alt={name} />  
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
                    <ItemCounter cantidad={cantidad} modify={setQuantity}/> 
                    
                </div>
                <div className="text__item">
                <h6 className="text_h6">Precio</h6>
                <p className="text_p"> $ {price}</p>
                {isInCart(id)
                    ? (
                    <>
                        <Link to="/productos">
                            <button className="btn btn-success btn-cont" >
                                Seguir comprando
                            </button>
                        </Link>
                        <Link to="/cart">
                            <button className="btn btn-secondary " >
                                Ir al carrito
                            </button>
                        </Link>
                    </>
                    ):(
                        <button className="btn btn-success btn-detail" onClick={handleAgregar}>Agregar al Carrito
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
    </div>
    )
}



