import React from "react";
import {Card, Button} from 'react-bootstrap';
import productos from '../../imagenes/productos';
import './item.css';
import {Link} from "react-router-dom";


export const Item= ({id,img, name, price,talle,product}) =>{

    return  (
        <Card style={{ width: '16rem' }} className="col-6 col-sm-3 m-1 container__det">
            <Card.Img  className="cardImg" src={productos[img]} alt={name}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Talle: {talle}</Card.Text> 
                <Card.Text>6 CUOTAS SIN INTERES</Card.Text>              
                <Link to={`/${product}/${id}`} className="cartLink">
                    <Button className="btnBuy" >COMPRAR</Button>
                </Link>
            </Card.Body>
        </Card>
    )}

    