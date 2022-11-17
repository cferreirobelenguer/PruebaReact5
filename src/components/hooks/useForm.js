
import {useState} from 'react'

export const useForm=(initialForm={})=>{
    //state que coge unos datos iniciales vacíos
    const [data,setData]=useState(initialForm)
    //Se cogen los datos del input de name
    const handlerName=(e)=>{
        console.log("input name "+e.target.value)
        setData({
            ...data,
            name:e.target.value
        })
    }
    //Se cogen los datos de email
    const handlerEmail=(e)=>{
        console.log("input email"+e.target.value)
        setData({
            ...data,
            email:e.target.value
        })
    }
    //Se evita que se recargue la página con e.preventDefault al hacer submit
    const handlerSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
    //Se resetean los datos al initialForm que eran los campos vacíos
    const handlerReset=()=>{
        setData({
            initialForm
        })
    }
    return{
        data,
        handlerName,
        handlerEmail,
        handlerSubmit,
        handlerReset
    }
}