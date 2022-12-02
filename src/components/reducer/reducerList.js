
const initialState=[{
    id:1,
    todo:"Ir a reunión",
    done:false,
}];

const todoReducer=(state=initialState,action={})=>{
    if(action.type==='[TODO] add todo'){
        return [...state,action.payload]
    }
    return state
}
let todos=todoReducer()

const newTodo={
    id:2,
    todo:'Recolectar la piedra del poder',
    done:false
}
//acción
const addTodoAction={
    //tipo
    type:'[TODO] add todo',
    payload:newTodo,
}
console.log({state:addTodoAction})
