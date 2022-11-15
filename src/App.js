import './App.css';
import Year from './components/Year'
import Title from './components/Title'
import {useState} from 'react'
import Contador from './components/Contador'
import Formulario from './components/Formulario';
import ApiBreakingBad from './components/ApiBreakingBad';
import { InputRef } from './components/InputRef';


function App() {
  const [counter, setCounter]=useState(20)
  return (
    <div className="App">
      <Year/>
      <Title/>
      <Contador contador={counter}>
      </Contador>
      <Formulario></Formulario>
      <ApiBreakingBad></ApiBreakingBad>
      <InputRef></InputRef>
    </div>
  );
}

export default App;
