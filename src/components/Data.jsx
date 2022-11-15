import React from 'react'

const Data=(props)=>{
    return(
        <div>
            <div>
                <input type="number" onChange={props.change}></input>
            </div>
            <div>
                <h2>{props.datos[0].quote}</h2>
            </div>
            <div>
                <h3>{props.datos[0].author}</h3>
            </div>
            <div>
                <h4>{props.datos[0].series}</h4>
            </div>
            <button onClick={props.anterior}>Anterior</button>
            <button onClick={props.siguiente}>Siguiente</button>
    </div>
    )
}
export default Data

    
