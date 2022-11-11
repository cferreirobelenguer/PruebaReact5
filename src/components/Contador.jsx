import React, { useState } from 'react';

    const Contador = ({ contador }) => {
        const [contadorTotal, setContadorTotal] = useState({ contador }.contador);
        const handlerAdd = () => {
            console.log(contadorTotal);
            setContadorTotal(contadorTotal+1)
        };
        const handlerRemove = () => {
            setContadorTotal(contadorTotal-1)
        };
        const handlerReset = () => {
            setContadorTotal(20)
        };
    return (
        <>
        <div>
            <h1>COUNTER APP</h1>
        </div>
        <div>
            <h2>{contadorTotal}</h2>
        </div>
        <div>
            <button onClick={handlerAdd}>+1</button>
            <button onClick={handlerRemove}>-1</button>
            <button onClick={handlerReset}>Reset</button>
        </div>
        </>
        );
    };
export default Contador;
