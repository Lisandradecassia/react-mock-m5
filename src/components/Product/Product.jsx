import React from "react";
import Button from "../Button/Button";
import S from "./Product.module.css";

const Product = ({ img, nome, desc, de, por, vezes, ou }) => {
  return (
    <article className={S.card}>
      <picture className={S.img}>
        <img src={img}></img>
      </picture>
      <h3 className={S.h3}>{nome}</h3>
      <h3 className={S.h3Desc}>{desc}</h3>
      <h4 className={S.h4}>De: R$ {de}</h4>
      <h5 className={S.h5}>Por: R$ {por}</h5>
      <h4 className={S.vezes}>
        ou {vezes} x de R$ {ou}
      </h4>
      <Button style={S.button} content="Comprar"></Button>
    </article>
  );
};

export default Product;
