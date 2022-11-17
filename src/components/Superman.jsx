import React,{useState,useEffect} from 'react'
import { heroes } from './data/heroes'


const Superman=()=>{
    const [data,setData]=useState(heroes[1])
    
        return(
        
            <div>
            <div>
                <h1>Datos de Superman</h1>
            </div>
                        <div>
                            <h2>Publisher: {data.publisher}</h2>
                        </div>
                        <div>
                            <h2>Characters: {data.characters}</h2>
                        </div>
            </div>
        )
    
}
export default Superman