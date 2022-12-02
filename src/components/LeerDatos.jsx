import React from 'react'
import { TodoItem } from './TodoItem'

export const LeerDatos=({todos=[]})=>{
    return(
        <>
            <div className="todo_list">
                <TodoItem todo={todos}></TodoItem>
            </div>
        </>
    )
}