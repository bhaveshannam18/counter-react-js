import './App.css';
import Counter from './Counter';
import Button from './Button';
import { useState } from 'react';

function App() {
  const [numberOfCounters , setNumberOfCounters] = useState(0);
  const getCounters = ()=>{
    return Array(numberOfCounters).fill(<Counter></Counter>);
  }
  return (
    <>
    <div className='app'>
      <Button 
      className={"topRightAddCounterBtn"}
      btnId={"addCounter"} 
      btnName={"+"} 
      handleClick={
        ()=>{
          setNumberOfCounters((numberOfCounters)=>numberOfCounters + 1);
        }
      } />
      <div className='counterContainer'>
        {getCounters()}
      </div>
      
    </div>
    </>
  );
}

export default App;
