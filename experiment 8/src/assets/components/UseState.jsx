import React, { useState } from 'react'

function UseState() {
    const[counter,setCounter]=useState(0);

    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }
    const reset=()=>{
        setCounter(0);
    }
  return (
   <>
   <h1>{counter}</h1>
   <button onClick={increment} style={{width:'200px', backgroundColor:'blue'}}>+</button>
  <button onClick={decrement} style={{width:'200px', backgroundColor:'blue', margin:'10px 0px'}}>-</button>
   <button onClick={reset} style={{width:'200px', backgroundColor:'blue'}}>reset</button> 
   </>
  )
}

export default UseState