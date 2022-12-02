import React from 'react'

export const TodoItem=({todo})=>{
    return(
        <div className="listado" >
            <span>
                <h2>{todo.description}</h2>
            </span>
            <div>
                <button className="borrar">
                    Borrar
                </button>
            </div>
        </div>
    )
}