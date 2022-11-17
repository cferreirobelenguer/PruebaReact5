import React,{useEffect} from 'react'
import { useDataDardevil } from './hooks/useDataDardevil'


const Daredevil=()=>{
    
    const {data, searchData}=useDataDardevil()

    useEffect(()=>{
        searchData()
        console.log(data)
    },[data])
        
        console.log(data)
        return(
        
            <div className="container_list">
                <div>
                    <h1>Datos de Daredevil</h1>
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