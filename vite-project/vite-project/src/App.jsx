import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);
  const [increm, setIncrem] = useState(1);
  const [decre, setDecre] = useState(-1);
  const handleIncrement = () => setCount(c => c + increm);

  const handleDecrement = () => {
    setCount(c => {
      const next = c + decre;
      return next < 0 ? 0 : next;
    });
  };

  return (
    <div className='App'>
      <h1 className='cnt'>Counter: {count}</h1>

      <div className='box'>
        <button className='incre' onClick={handleIncrement}>Increment</button>
        <button className='decre' onClick={handleDecrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
