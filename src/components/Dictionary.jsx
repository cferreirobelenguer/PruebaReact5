import React,{useState, useEffect} from 'react'

export const Dictionary=()=>{
    const [contenido,setContenido]=useState("")
    const [error,setError]=useState("")
    const [isLoading, setIsLoading]=useState(false)
    const [palabra,setPalabra]=useState("")
    const handlerChange=(e)=>{
        setPalabra(e.target.value)
        console.log(palabra)
    }
    
    useEffect(()=>{
        const getData=async(palabra)=>{
            
            try{
                setIsLoading(true)
                console.log(palabra)
                const res= await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+palabra)
                const data=await res.json()
                const info=data.meanings[0].definitions[0].definition
                setContenido(info)
                setIsLoading(false)
                
            }catch(error){
                setError("Error al procesar")
            }
            console.log(contenido)
        }
        getData(palabra)
    },[palabra])

    const handlerClick=()=>{
        console.log("se ejecuta el evento")
    }
    return(
        <div>
            <div><h1>Free dictionary</h1></div>
            <div>
                <label htmlFor='word'>Escribe una palabra: </label>
                <input
                    onChange={handlerChange}
                    required
                    placeholder="Introduce palabra">
                </input>
            </div>
            <div>
                <button onClick={handlerClick}>Consultar Definición</button>
            </div>
            <div>
                    {isLoading && <h2 id="cargando">Cargando...</h2>}
                    {!isLoading && contenido && <h2 id="contenido">{contenido}</h2>}
                    {!isLoading && error && <h2 id="error">{error}</h2>}
            </div>
        </div>
    )
}