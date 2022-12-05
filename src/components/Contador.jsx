import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIncrement,setDecrement,setReset } from '../store/slices/counter';

    const Contador = ({ contador }) => {
        const dispatch=useDispatch()
        const {counter}=useSelector(state=>state.counter)
        
    return (
        <>
        <div>
            <h1>COUNTER APP</h1>
        </div>
        <div>
            <h2>{counter}</h2>
        </div>
        <div>
            <button onClick={()=>dispatch(setIncrement())}>+1</button>
            <button onClick={()=>dispatch(setDecrement())}>-1</button>
            <button onClick={()=>dispatch(setReset())}>Reset</button>
        </div>
        </>
        );
    };
export default Contador;
