import React from 'react'
import {useForm} from './hooks/index'



const Formulario=()=>{
    const {data,handlerSubmit,handlerName,handlerEmail, handlerReset}=useForm({
        name:"",
        email:""
    })
    
    return(
        <div>
            <h1>Formulario</h1>
            <div>
                <h2>Nombre: {data.name}</h2>
            </div>
            <div>
                <h2>Email: {data.email}</h2>
            </div>
            <form onSubmit={handlerSubmit}>
                <p>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" onChange={handlerName}></input>
                </p>
                <p>
                    <label htmlFor="email">Email: </label>
                    <input type="email" onChange={handlerEmail}></input>
                </p>
            <input type="submit" ></input>
            <input type="button" value="Reset" onClick={handlerReset}></input>
            </form>
        </div>
    )
}
export default Formulario