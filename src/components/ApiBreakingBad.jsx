import React from 'react'
import {useFetch} from './hooks/useFetch'

export const ApiBreakingBad=()=>{
    const {data,isLoading,hasError,previousQuote,nextQuote,handlerChange}=useFetch("https://www.breakingbadapi.com/api/quotes/")
    
    return(
        <>
            <h1>api breaking bad</h1>
            <hr></hr>
            {isLoading===false && 
            <>
                <div>
                    <input type="number" onChange={handlerChange}></input>
                </div>
                <div>
                    <h2>{data[0].quote}</h2>
                </div>
                <div>
                    <h3>{data[0].author}</h3>
                </div>
                <div>
                    <h4>{data[0].series}</h4>
                </div>
                <button onClick={previousQuote}>Anterior</button>
                <button onClick={nextQuote}>Siguiente</button>
                
            </>
            }
            {isLoading &&
            <>
                <div>
                    <h1>Cargando...</h1>
                </div>
                
            </>
            }
            <hr></hr>
        </>
    )
}
export default ApiBreakingBad