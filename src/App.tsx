import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function IncrementButton(props: any){
  const {handler, increment} = props
  const handleClick = () => handler(increment);
  return <button onClick={handleClick}>+{increment}</button>
}

function App() {
  const [counter, setCounter] = useState(0);
  const updateCounter = (increment:number) => {setCounter(counter+increment)};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IncrementButton increment={1} handler={updateCounter}/>
        <IncrementButton increment={5} handler={updateCounter}/>
        <IncrementButton increment={10} handler={updateCounter}/>
        <IncrementButton increment={100} handler={updateCounter}/>
        <p>{counter}</p>
      </header>
    </div>
  );
}

export default App;
