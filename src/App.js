import { useState } from 'react';
import './App.css';
import Forms from './Components/Forms';
import Results from './Components/Results';


function App() {
  const [state,setState] = useState ({
    firstName:"",
    lastName:"",
    eMail: "",
    password:"",
    confirmation:""
  });
  
  return (
    <div className="App">
      <Forms inputs ={state} setInputs = {setState} />
      <Results data = {state}/>
    </div>
  );
}

export default App;
