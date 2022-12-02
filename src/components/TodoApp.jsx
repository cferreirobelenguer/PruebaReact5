import React from 'react'
import { useReducer } from 'react'
import { LeerDatos } from './LeerDatos'

import { todoReducer } from './reducer/todoReducer'
import { TodoForm } from './TodoForm'


//Componente principal app TodoList
const initialState=[
    {
        id:new Date().getTime(),
        description:"Hacer tareas",
        done:false
    },
    {
        id:new Date().getTime()+100,
        description:"Ir al trabajo",
        done:false
    }
]
export const TodoApp=()=>{
    const [todos,dispatch]=useReducer(todoReducer,initialState)
    const handleNewTodo=(todo)=>{
        console.log({todo})
    }
    return(
        <div className="todo_container">
    
            <div className="todo_listado">
                <div className="todo_title">
                    <h1>TodoApp: 10</h1>
                    <span>Pendientes:2</span>
                </div>
                <hr/>
                <div className="todo_list">
                    {
                        todos.map(todo=>(
                            <LeerDatos key={todo.id} todos={todo}></LeerDatos>
                        ))
                    }
                    
                    
                </div>
            </div>
            
            <div className="todo_form">
                <div className="todo_form_title">
                    <h2>Agregar TODO</h2>
                </div>
                <TodoForm onNewTodo={handleNewTodo}></TodoForm>
            </div>
        </div>
    )
}