import React from 'react'
import {useState, useCallback} from 'react'
import { Hijo } from './Hijo';

const Padre=()=>{
    const numeros=[2,4,6,8,10]
    const [valor,setValor]=useState(0)

    //Uso una callback para llamar a la función incrementar para que la memoria sólo se ejecute una vez
    const incrementar = useCallback(
        (num)=>{
            setValor(valor+num)
        }, []);
    
    return(
        <div>
            <h1>Padre</h1>
            <p>Total: {valor}</p>
            <hr></hr>
            {
                numeros.map(n => {
                    return(
                        <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                    )
                    
                })
            }
            <hr></hr>
        </div>
    )
}
export default Padre