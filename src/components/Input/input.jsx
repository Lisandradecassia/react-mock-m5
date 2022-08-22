import React from "react";

const Input = ({ type, name, style }) => {
  return <input className={style} type={type} name={name} />;
};

export default Input;
