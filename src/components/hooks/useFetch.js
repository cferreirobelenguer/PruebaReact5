import { useEffect, useState} from "react"

export const useFetch=(url)=>{
    const [state,setState]=useState({
        data:null,
        isLoading:true,
        hasError:null
    })
    const [count, setCount]=useState(1)

    //método que hace la llamada a la api
    const sendData=async()=>{
        setState({
            ...state,
            isLoading:true
        })
        
        const res=await fetch(url+count)
        const data=await res.json()
        
        setState({
            data:data,
            isLoading:false,
            hasError:null
        })
    }
    //Cada vez  que se actualiza count se produce la llamada a la api para mostrar los datos actualizados
    useEffect(()=>{
        sendData()
        
    },[count])

    //métodos de paginación de la api breaking bad
    const nextQuote=()=>{
        
        if(count>=30){
            setCount(30)
        }else{
            setCount(count+1)
        }
    }
    const previousQuote=()=>{
        
        if(count<=1){
            setCount(1)
        }else{
            setCount(count-1)
        }
    }

    return {
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.isLoading,
        previousQuote,
        nextQuote
    }
    
}