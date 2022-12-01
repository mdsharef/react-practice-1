import React from 'react'

const UpdateIncrementDecrement = ({incrementValue, decrementValue, handleIncrementValue, handleDecrementValue}) => {
  return (
    <div>
        <label htmlFor="inc">Increment</label>
        <input type="number" id="inc" value={incrementValue} onChange={handleIncrementValue} />
        <label htmlFor="dec">Decrement</label>
        <input type="number" id="dec" value={decrementValue} onChange={handleDecrementValue} />
    </div>
  )
}

export default UpdateIncrementDecrement