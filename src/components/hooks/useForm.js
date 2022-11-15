
import {useState} from 'react'

export const useForm=(initialForm={})=>{
    const [data,setData]=useState(initialForm)

    const handlerName=(e)=>{
        console.log("input name "+e.target.value)
        setData({
            ...data,
            name:e.target.value
        })
    }
    const handlerEmail=(e)=>{
        console.log("input email"+e.target.value)
        setData({
            ...data,
            email:e.target.value
        })
    }
    const handlerSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
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