import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import S from "./FormBelow.module.css";

const FormBelow = () => {
  return (
    <form className={S.form}>
      <div className={S.container}>
        <div className={S.information}>
          <Label texto="Nome do seu amigo:" />
          <Input style={S.input} type="text" />
        </div>

        <div className={S.information}>
          <Label texto="E-mail:" />
          <Input
            style={S.input}
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
      </div>
      <Button style={S.button} content="Enviar agora" />
    </form>
  );
};

export default FormBelow;
