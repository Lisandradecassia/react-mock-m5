import React from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input";
import Label from "../Label/Label";
import S from "./Form.module.css";

const Form = () => {
  return (
    <form className={S.form}>
      <div className={S.informationFill}>
        <Label texto="Seu nome:" />
        <Input style={S.input} type="text" />
      </div>

      <div className={S.informationFill}>
        <Label texto="E-mail:" />
        <Input
          style={S.input}
          type="e-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </div>

      <div className={S.informationFill}>
        <Label texto="CPF" />
        <Input style={S.input} type="text" pattern="^[0-9]{11}$" />
      </div>

      <div className={S.divRadio}>
        <div className={S.radio}>
          <Input type="radio" name="sexo" />
          <Label texto="Masculino" />
        </div>

        <div className={S.radio}>
          <Input type="radio" name="sexo" />
          <Label texto="Feminino" />
        </div>
      </div>

      <Button style={S.button} content="Enviar" />
    </form>
  );
};

export default Form;
