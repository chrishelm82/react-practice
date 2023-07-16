import React, { useState } from 'react'
import '../button.css'

function Button() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
    setCount(count - 1)
    } 
  }

  const resetAge = () => {
    setCount(0)
  }

  return (
    <>
      <p>Age: {count} </p>
      <button onClick={resetAge} className='reset-button'>
        Reset Age
      </button>
      <button onClick={decrement} className='decrement-button'>
        ⬇
      </button>
      <button onClick={increment} className='increment-button'>
        ⬆
      </button>
    </>
  )
}

export default Button
