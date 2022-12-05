import './App.css'
import Year from './components/Year'
import Title from './components/Title'
import Contador from './components/Contador'
import Formulario from './components/Formulario';
import ApiBreakingBad from './components/ApiBreakingBad';
import { InputRef } from './components/InputRef';
import Router from './components/route/Router';
import Padre from './components/Padre';
import Dictionary from './components/Dictionary';
import { Provider } from 'react-redux'
import { store } from './store/store'


function App() {

  return (
    <Provider store={store}>
      <div className="App">
      <Year/>
      <hr></hr>
      <Title/>
      <hr></hr>
      <Contador>
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
      <hr></hr>
      <Dictionary></Dictionary>
      <br></br>
      <hr/>
      
      
    </div>
    </Provider>
    
  );
}

export default App;
