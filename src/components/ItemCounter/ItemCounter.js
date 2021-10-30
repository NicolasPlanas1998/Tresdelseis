import React from "react";

export const ItemCounter = ({cantidad, modify}) =>{

    const handleRestar = () =>{
        if(cantidad > 0){
        modify(cantidad -1)
    }}
    const handleSumar = () =>{
        parseInt(modify(cantidad + 1))
    }


    return(
    <div>
        <h6 className="text_h6">Cantidad: </h6>
        <button className="btn btn-primary count" onClick={handleRestar}>-</button>
        <span className="count_num">{cantidad}</span>
        <button className="btn btn-primary count" onClick={handleSumar}> +</button>
    </div>
    )
}

