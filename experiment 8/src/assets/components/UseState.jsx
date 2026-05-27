import React, { useState } from 'react'

function UseState() {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>{counter}</h1>
      <button onClick={increment} style={{ width: '200px', backgroundColor: 'blue', color: 'white', margin: '5px' }}>+</button>
      <button onClick={decrement} style={{ width: '200px', backgroundColor: 'blue', color: 'white', margin: '5px' }}>-</button>
      <button onClick={reset} style={{ width: '200px', backgroundColor: 'blue', color: 'white', margin: '5px' }}>reset</button>
    </div>
  )
}

export default UseState
