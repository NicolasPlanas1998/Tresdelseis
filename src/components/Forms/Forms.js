import React, { useState } from "react";
import Swal from "sweetalert2";
import './form.css'


// Formulario de contacto
export const Form = () =>{

    const [values, setValue] = useState({
        nombre:'',
        mail:'',
        mensaje:''
    });


    const handleInputChange = (e) =>{

        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(values)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enviado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return(
        <form onSubmit={handleSubmit} className="container-fluid  target form-contact">
            <h2 className="center">¡Contactate con nosotros!</h2>
            <div className="form-group inputs__gen">
                <label for="userName">Nombre</label>
                <input type="text" className="form-control" name="nombre" value={values.nombre} id="userName" onChange={handleInputChange} />
            </div>
            <div className="form-group inputs__gen">
                <label for="userEmail">Dirección de correo electrónico</label>
                <input type="email" className="form-control" name="mail" value={values.mail} id="userEmail" onChange={handleInputChange} />
            </div>
            <div className="form-group inputs__gen">
                <label for="message">Mensaje</label>
                <input type="text" className="form-control" name="mensaje" value={values.mensaje} id="message" onChange={handleInputChange} />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Recibir las ultimas noticias sobre ofertas y promociones</label>
            </div>
            <button type="submit" onSubmit={handleSubmit} className="btn btn-primary btn-contact">ENVIAR</button>
        </form>
    )
}