import React from 'react'

const Button = ({content,style}) => {
  return (
    <button className={style}>{content}</button>
  )
}

export default Button