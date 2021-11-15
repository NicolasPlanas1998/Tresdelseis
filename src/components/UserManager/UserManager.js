import React,{useState} from "react";
import { agregarStock } from "../../firebase/agregarStock";
import Swal from "sweetalert2";
import "./user.css"

export const UserManager = () =>{

    const [values, setValue] = useState({
        name:'',
        product:'',
        price: '',
        stock: '',
        img:'',
        talle:'',
        color1: '',
        color2: ''
    })

    // Controlamos que no se agregue 2 veces el mismo producto
    const [update, setUpdate] = useState(false)   
    const newProduct = () =>{
        setUpdate(true)
    }

    const handleInputChange = (e) =>{
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // Agregamos a firestore el nuevo stock
    const handleSubmit =  (e) =>{
        e.preventDefault()

        agregarStock(values)
            .then(()=>{
                Swal.fire({
                    text:` ¿Estas seguro que quieres agregar ${values.stock} unidades del producto ${values.name} al stock?`,
                    showDenyButton: true,
                    confirmButtonText: 'Si, agregar',
                    denyButtonText: `Cancelar`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Añadido con éxito',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                })
                setUpdate(false)
            })
        .catch(() =>{
                    Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error'
            })
        })
    }

    return(
        <>  
            {update ? 
            <form onSubmit={handleSubmit} className="container target">
                <h2 className="center"> AGREGAR NUEVOS PRODUCTOS</h2>
                <div className="inputs__gen">
                    <label for="name">Nombre del producto</label>
                    <input type="text" name="name" id="name" onChange={handleInputChange} /> 
                </div>
                <div className="inputs__gen">
                    <label for="productos">Producto</label>
                    <input type="text" name="product" id="product" onChange={handleInputChange} />
                </div>
                <div className="inputs__gen">
                    <label for="price">Precio</label>
                    <input type="number" name="price" id="price" onChange={handleInputChange}/> 
                </div>
                <div className="inputs__gen">
                    <label for="color1">Stock</label>
                    <input type="number" name="stock" id="stock" onChange={handleInputChange}/> 
                </div>
                <div className="inputs__gen">
                    <label for="talle">Talle</label>
                    <input type="text" name="talle" id="talle" onChange={handleInputChange}/> 
                </div>
                <div className="inputs__gen">
                    <label for="img">N° de imagen</label>
                    <input type="number" name="img" id="img" onChange={handleInputChange}/> 
                </div>
                <div className="inputs__gen">
                    <label for="color1">Color 1</label>
                    <input type="color" name="color1" className="color" onChange={handleInputChange}/> 
                </div>
                <div className="inputs__gen">
                    <label for="color2">Color 2</label>
                    <input type="color" name="color2" className="color" onChange={handleInputChange}/> 
                </div>
                <div className="row ">
                    <div className="col-sm-4 col-md-4 col-lg-4 text-center ">
                        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary btn--add">AGREGAR</button>
                    </div>
                </div>
            </form>
            :
            <div className="container">
            <div className="row ">
                <div className="col-sm-4 col-md-4 col-lg-4 text-center container__btn">
                    <button className="btn-addProduct" onClick={newProduct}>Agregar nuevo producto</button>
                </div>
            </div>
            </div>
            }
        </>
    )
}