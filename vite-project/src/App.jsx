import React, { useRef, useState } from 'react'
import './App.css'
import { saveCount } from './services/counter.service';
import History from './component/counter.history.jsx';

const App = () => {

  const [count, setCount] = useState(0);
  const [increm, setIncrem] = useState(1);
  const [decre, setDecre] = useState(-1);

  const historyRef = useRef();


  const handleSave = async () => {
    if (count <= 0) {
      alert('Count must be greater than zero to save');
      return;
    }
    
    try {
      const response = await saveCount(count);
      if (response.ok) {
        alert('Count saved successfully');
        // Refresh history if it's open
        if (historyRef.current) {
          historyRef.current.refreshHistory();
        }
      } else {
        alert('Failed to save count');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving count');
    }
  };

  return (
    <div className='App'>
      <History ref={historyRef} />
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
      <button className='sv' onClick={handleSave}>Save</button>
      
    </div>
  )
}


export default App
