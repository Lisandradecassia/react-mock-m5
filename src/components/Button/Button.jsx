import React from 'react'

const Button = ({content, style, onClick}) => {
  return (
    <button onClick={onClick}  className={style}>{content}</button>
  )
}

export default Button