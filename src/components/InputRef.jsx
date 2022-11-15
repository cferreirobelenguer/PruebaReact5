import React,{useRef} from 'react'

export const InputRef=()=>{
    const nameRef=useRef()
    const handlerFocus=()=>{
        console.log("pongo el foco")
        nameRef.current.select()
    }
    return(
        <>  
            <div>
                <h1>Introduzca nombre</h1>
            </div>
            <div>
                <input type="text" ref={nameRef}></input>
            </div>
            <div>
                <button onClick={handlerFocus}>Poner el foco en nombre</button>
            </div>
        </>
    )
    
    
}
