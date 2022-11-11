import './App.css';
import Year from './components/Year'
import Title from './components/Title'
import {useState} from 'react'
import Contador from './components/Contador'


function App() {
  const [counter, setCounter]=useState(20)
  return (
    <div className="App">
      <Year/>
      <Title/>
      <Contador contador={counter}>
      </Contador>

    </div>
  );
}

export default App;
