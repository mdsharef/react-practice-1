import React from 'react'
import Button from '../button/Button'

const Buttons = ({increment, decrement}) => {
  return (
    <div>
        <Button text='Increase' type='button' variant='primary' size='medium' handleClick={increment} />
        --
        <Button text='Decrease' type='button' variant='primary' size='medium' handleClick={decrement} />
    </div>
  )
}

export default Buttons;