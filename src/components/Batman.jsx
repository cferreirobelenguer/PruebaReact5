import React,{useEffect} from 'react'
import { useDataBatman } from './hooks/useDataBatman'

const Batman=()=>{
    const {data, searchData}=useDataBatman()
    useEffect(()=>{
        searchData()
        console.log(data)
    },[data])
        return(
        
            <div className="container_list">
                <div>
                    <h1>Datos de Batman</h1>
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