import './App.css';
import Year from './components/Year'
import Title from './components/Title'
import {useState} from 'react'
import Contador from './components/Contador'
import Formulario from './components/Formulario';
import ApiBreakingBad from './components/ApiBreakingBad';
import { InputRef } from './components/InputRef';
import Router from './components/route/Router';
import Padre from './components/Padre';



function App() {
  const [counter, setCounter]=useState(20)
  return (
    <div className="App">
      <Year/>
      <hr></hr>
      <Title/>
      <hr></hr>
      <Contador contador={counter}>
      </Contador>
      <hr></hr>
      <Formulario></Formulario>
      <hr></hr>
      <ApiBreakingBad></ApiBreakingBad>
      <hr></hr>
      <InputRef></InputRef>
      <hr></hr>
      <Router></Router>
      <hr></hr>
      <Padre></Padre>
    </div>
  );
}

export default App;
