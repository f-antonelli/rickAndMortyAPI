import Form from "./components/Form/Form";
import PrintData from "./components/PrintData/PrintData";
import { useState } from 'react';
import './App.scss'

function App() {

  const [ nombrePj, setNombrePj ] = useState('')

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Form setNombrePj={setNombrePj} />
      <PrintData nombrePj={nombrePj} />
    </div>
  );
}

export default App;
