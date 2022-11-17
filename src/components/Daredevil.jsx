import React,{useState} from 'react'
import { heroes } from './data/heroes'


const Daredevil=()=>{
    const [data,setData]=useState(heroes[2])
    
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
export default Daredevil