import React,{useState} from 'react'
import axios from 'axios'

const Dictionary=()=>{
    const [contenido,setContenido]=useState("")
    const [error,setError]=useState("")
    const [isLoading, setIsLoading]=useState(false)
    const [palabra,setPalabra]=useState("")
    const handlerChange=(e)=>{
        setPalabra(e.target.value)
        
    }
    
    const handlerSubmit=(e)=>{
                e.preventDefault()
                setIsLoading(true)
                
                axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+palabra)
                .then(data=>{
                    setIsLoading(false)
                    setContenido(data.data[0].meanings[0].definitions[0].definition)
                    setError("")
                })
                .catch((error)=>{
                    if(error.message.includes('404')){
                        setContenido("")
                        setIsLoading(false)
                        setError("Error")
                    }
                })
                
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
                <button onClick={handlerSubmit}>Ver definición</button>
            </div>
            <div>
                    {isLoading && <h2 id="cargando">Cargando...</h2>}
                    {!isLoading && error && <h2 id="error">{error}</h2>}
                    {!isLoading && contenido && <h2 id="contenido">{contenido}</h2>}
                    
            </div>
        </div>
    )
}
export default Dictionary