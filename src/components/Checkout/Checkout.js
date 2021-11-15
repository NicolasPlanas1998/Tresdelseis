import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import './checkout.css'
import { generarOrden } from "../../firebase/generarOrden";
import { Redirect } from "react-router";

export const Checkout = () =>{


    const {carrito, calcularTotal,vaciarCarrito} = useContext(CartContext)

    const [values, setValue] = useState({
        nombre:'',
        apellido:'',
        mail: '',
        telefono: '',
        deb:'',
        tc:'',
        trans:'' 
    })

    const handleInputChange = (e) =>{

        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =  (e) =>{
        e.preventDefault()

        // control de completado de los datos
        if(values.nombre.length < 3){
            alert('nombre invalido')
        }else if(values.apellido.length < 3){
            alert('apellido invalido')
        }else if(values.mail.length < 6){
            alert('El email es invalido')
        }else if(values.mail.length < 6){
            alert('El email es invalido')
        }else{
        
        generarOrden(values, carrito, calcularTotal())
            .then((res)=>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Su compra fue realizada con exito `,
                    showConfirmButton: false,
                    timer: 1500
                })
                vaciarCarrito()
                
            })
        .catch((err) =>{
                    Swal.fire({
                    icon: 'error',
                    title: 'Productos sin stock',
                    text: `No hay stock de: ${err.map(el => el.name).join(', ')}`
            })
        })
    }}
    return(
        <>
            {carrito.length === 0 && <Redirect to="/" />}
            <form onSubmit={handleSubmit} className="container-fluid  target form-contact">
                <div className="form-group">
                    <label for="buyerName">Nombre</label>
                    <input type="text" className="form-control" name="nombre" value={values.nombre} id="buyerName" onChange={handleInputChange} placeholder="Ingrese su nombre"/>
                </div>
                <div className="form-group">
                    <label for="buyerSurname">Apellido</label>
                    <input type="text" className="form-control" name="apellido" value={values.apellido} id="buyerSurname" onChange={handleInputChange} placeholder="Ingrese su apellido"/>
                </div>
                <div className="form-group">
                    <label for="buyerEmail">Dirección de correo electrónico</label>
                    <input type="email" className="form-control" name="mail" value={values.mail} id="buyerEmail" onChange={handleInputChange} placeholder="Ingrese email"/>
                </div>
                <div className="form-group--radio">
                    <p>Medio de pago</p>
                    <div>          
                        <div>
                            <input onChange={handleInputChange} className="radio" type="radio" id="deb" name="deb" value="debito"/>
                            <label for="deb">Debito</label>
                        </div>
                        <div>
                            <input onChange={handleInputChange} className="radio"type="radio" id="tc" name="tc" value="tarjet de credito"/>
                            <label for="tc">Tarjeta de Credito</label>
                        </div>
                        <div>
                            <input onChange={handleInputChange} className="radio" type="radio" id="trans" name="trans" value="transferencia"/>
                            <label for="trans">Transferencia</label>
                        </div>
                    </div>
                </div>
                <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </>
)
}