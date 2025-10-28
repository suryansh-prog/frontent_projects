import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);
  const [increm, setIncrem] = useState(1);
  const [decre, setDecre] = useState(-1);
  return (
    <div className='App'>
      <h1 className='cnt'>Counter: {count}</h1>

      <div className='box'>
        <button className='incre' onClick={() => setCount(count + increm)}>Increment</button>
        <button className='decre' onClick={() => {
          var res = count + decre;
          if (res < 0) setCount(0);
          else
            setCount(res)
        }}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}
<script></script>

export default App
