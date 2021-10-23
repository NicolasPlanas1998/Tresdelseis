import React from "react";
import {Card, Button} from 'react-bootstrap';
import productos from '../../imagenes/productos/productos';
import './item.css';

export const Item= ({id, name, price,talle,oferta}) =>{


    return  (
        <Card style={{ width: '16rem' }} className="col-6 col-sm-3 m-1">
            <Card.Img  className="cardImg" src={productos[id]}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Talle: {talle}</Card.Text> 
                <Card.Text>{oferta}</Card.Text>              
                <Button variant="primary">AGREGAR AL CARRITO</Button>
            </Card.Body>
        </Card>
    )}

    