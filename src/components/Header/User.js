import React,{useState} from "react";
import {Modal} from 'react-bootstrap';
import { Redirect } from "react-router";

export const User = () =>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true); 
    const handleClose = () => setShow(false);
    const [update, setUpdate] = useState(false)   
    const [valueUser, setUser] = useState({
        email:'',
        password:''
    })


    const handleInputChange = (e) =>{
        setUser({
            ...valueUser,
            [e.target.name]: e.target.value
        })
    } 

    // Validacion del mail y contraseña correcto del usuario controlador
    const login = () => {
        if(valueUser.email === 'coderhouse@gmail.com' && valueUser.password === 'coder'){
            setUpdate(true)
        }else {
            alert('contraseña incorrecta')
        }
    };

    return (
        <>
            {update ?
            <Redirect to="/login"/>
            :
            <div>
                <div className="widget" onClick={handleShow}>
                    <i class="fas fa-user icon"></i>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>INICIAR SESIÓN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label for="userEmail">Dirección de correo electrónico</label>
                            <input type="email" className="form-control" name='email'  onChange={handleInputChange} placeholder="Ingrese email"/>
                        </div>
                        <div className="form-group">
                            <label for="userName">Contraseña</label>
                            <input type="password" className="form-control" name='password'  onChange={handleInputChange} placeholder="Ingrese su contraseña"/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary" onClick={login}>Ingresar</button>
                    </Modal.Footer>
                </Modal>
            </div>}
        </>
    )
}
