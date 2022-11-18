import React from 'react'

export const Hijo=React.memo(({numero, incrementar})=>{
        //Envolvemos el componente hijo que llama a incrementar en la función memo para que memorice la función
        console.log('Me volví a generar');

        return(
            
            <button 
                onClick={()=>incrementar(numero)}
            >
                {numero}
            </button>
            
        )
        
})