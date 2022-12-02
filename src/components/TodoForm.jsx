import React, { useState } from 'react'

export const TodoForm=({onNewTodo})=>{
    //Valor inicial del formulario
    const initialForm={
        description:''
    }
    const {description}=initialForm

    const [formState,setFormState]=useState(initialForm)

    //Componente de formulario todoList
    //Agrega nuevas tareas a la lista de tareas
    const handlerSubmit=(e)=>{
        e.preventDefault()
        console.log(formState.description)
        if(formState.description.length<=1)return
        const newTodo={
            id:new Date().getTime(),
            done:false,
            description:formState.description
        }
        
        onNewTodo(newTodo)

    }
    const onResetForm=()=>{
        setFormState(initialForm)
        
    }
    const handlerChange=({target})=>{
        
        setFormState({
            ...formState,
            description:target.value
        })

    }
    return(
        <div className="todo_form_input">
            <form onSubmit={handlerSubmit}>
                <div>
                    <input
                        className="inputStyle"
                        required
                        placeholder='¿Qué hay que hacer?'
                        onChange={handlerChange}
                        
                    />
                    <div className="button_separation">
                    <button
                        type="submit"
                        className="buttonStyle"
                        onClick={handlerSubmit}
                    >
                        Enviar
                    </button>
                    <button
                        type="reset"
                        className="buttonStyle"
                        onClick={onResetForm}
                    >
                        Reset
                    </button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}