import React from 'react'

const Button = ({value, handleClick, text}) => {
  return (
    <button value={value} onClick={handleClick}>{text}</button>
  )
}

export default Button