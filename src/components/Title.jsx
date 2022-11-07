
import React, {useState} from 'react'

const Title=()=>{
    //Ejercício de renderizado condicional
    //Declaramos un state a 0 que va a decir qué vistas se muestran, cuando es 0 no se muestra nada
    const [check,setCheck]=useState(0)

    //Si check es 1 se actualiza el state y se muestra titulo 1
    const handleTitle1=()=>{
        setCheck(1)
        console.log(check)
    }
    //Si check es 2 se actualiza el state y se muestra titulo 2
    const handleTitle2=()=>{
        setCheck(2)
        console.log(check)
        
    }
    
    return(
        <div>
            <button onClick={handleTitle1}>Mostrar Título 1</button>
            <button onClick={handleTitle2}>Mostrar Título 2</button>
            <br></br>
            <br></br>
            {/*Si check es 0 no se muestra nada, si check es 1 se muestra titulo 1 y si no se muestra titulo 2*/}
            {check===0?"":check===1?"Titulo 1":"Titulo 2"}
        </div>
    )
}
export default Title