import React from 'react'
import Button from './Button'

const Buttons = ({handleClick}) => {
  return (
    <>
        <Button value="all" handleClick={handleClick} text="All" />
        <Button value="completed" handleClick={handleClick} text="Completed" />
        <Button value="incompleted" handleClick={handleClick} text="Incompleted" />
    </>
  )
}

export default Buttons