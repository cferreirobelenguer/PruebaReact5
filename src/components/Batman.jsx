import React,{useState} from 'react'
import { heroes } from './data/heroes'


const Batman=()=>{
    const [data,setData]=useState(heroes[0])
    
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
export default Batman