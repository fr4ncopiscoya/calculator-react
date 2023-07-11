import './App.css';
import Button from './components/Button'
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const res = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Please enter');
    }
  };

  return (
    <div className="App">
      <div className="title">
        <h1>CALCULATOR - REACT</h1>
      </div>
      <div className="container">
        <Screen input={input} />
        <div className="row">
          <Button Click={addInput} > 1 </Button>
          <Button Click={addInput}> 2 </Button>
          <Button Click={addInput}> 3 </Button>
          <Button Click={addInput}> + </Button>
        </div>
        <div className="row">
          <Button Click={addInput}> 4 </Button>
          <Button Click={addInput}> 5 </Button>
          <Button Click={addInput}> 6 </Button>
          <Button Click={addInput}> - </Button>
        </div>
        <div className="row">
          <Button Click={addInput}> 7 </Button>
          <Button Click={addInput}> 8 </Button>
          <Button Click={addInput}> 9 </Button>
          <Button Click={addInput}> * </Button>
        </div>
        <div className="row">
          <Button Click={res}> = </Button>
          <Button Click={addInput}> 0 </Button>
          <Button Click={addInput}> . </Button>
          <Button Click={addInput}> / </Button>
        </div>
        <div className="row">
          <ButtonClear Clear={() => setInput('')}>
            Clear
          </ButtonClear>

        </div>
      </div>
    </div>
  );
}

export default App;
