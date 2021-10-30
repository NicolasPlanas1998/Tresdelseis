import React, { useState } from "react";
import './form.css'

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
    }

    return(
        <form onSubmit={handleSubmit} className="container-fluid detail form">
            <div className="form-group">
                <label for="userName">Nombre</label>
                <input type="text" className="form-control" name="nombre" value={values.nombre} id="userName" onChange={handleInputChange} placeholder="Ingrese su nombre"/>
            </div>
            <div className="form-group">
                <label for="userEmail">Dirección de correo electrónico</label>
                <input type="email" className="form-control" name="mail" value={values.mail} id="userEmail" onChange={handleInputChange} placeholder="Ingrese email"/>
            </div>
            <div className="form-group">
                <label for="message">Mensaje</label>
                <input type="text" className="form-control" name="mensaje" value={values.mensaje} id="message" onChange={handleInputChange} placeholder="Ingrese su mensaje"/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Recibir las ultimas noticias sobre ofertas y promociones</label>
            </div>
            <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
    )
}