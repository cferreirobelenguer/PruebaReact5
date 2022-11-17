import {useState} from 'react'
import { heroes } from '../data/heroes'

export const useDataBatman=()=>{
    const [data,setData]=useState(heroes)
    var posicion=0
        const searchData=()=>{
            for(let i in heroes){
                
                console.log(heroes[i].id)
                if(heroes[i].id==='dc-batman'){
                    posicion=i
                    setData(heroes[posicion])
                }
            }
            
        }

    return{
        data,
        searchData
    }
        

}