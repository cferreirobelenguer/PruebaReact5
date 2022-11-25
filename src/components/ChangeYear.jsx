import React ,{useState, useEffect} from "react";


const ChangeReact =(props)=>{
    const [data,setData]=useState(0)

    useEffect(() => {
        //Cogemos el prop de Year del año actual
        setData(props.actualyear)
    },[]);
    
    //método para aumentar el año 
    const handlerNext=()=>{
        setData(data+1) 
        console.log(data)

    }
    //método para disminuir el año
    const handlerPrevious=()=>{
    
        setData(data-1)
        console.log(data)
    }
    //método para coger el año del input y modificar el año actual a ese
    const sendForm=(event)=>{
        //Se valida si es número el valor del input
        //En caso de que sea número se muestra por pantalla
        //En caso contrario no se muestra, y se seguiría mostrando la fecha actual
        if(!isNaN(event.target.value)){
            setData(parseInt(event.target.value))
        }
        
        console.log(data)

    }
    //método que vuelve a mostrar el año actual si había sido modificado en el input
    const handlerYear=()=>{
        const fecha=new Date()
        setData(fecha.getFullYear())
    }

    return(
        <>
            
            <div className="inputYear">
                <p>
                    <input type="text"  onChange={(e)=>sendForm(e)}></input>
                </p>
            </div>
            <br></br>
            <div className="buttonNext">
                <button onClick={handlerNext}>Next year</button>
            </div>
            <br></br>
            <div className="buttonPrevious">
                <button onClick={handlerPrevious}>Previous year</button>
            </div>
            <br></br>
            <div className="buttonYear">
                <button onClick={handlerYear}>Actual year</button>
            </div>
            <br></br>
            <div className="actual">
                {/*Se muestra data si el resultado no es NaN en caso contrario se muestra una cadena vacía*/}
                <h1 id="valorActual">{!(isNaN(data))?data:""}</h1>
            </div>
        </>
        
    )
}
export default ChangeReact