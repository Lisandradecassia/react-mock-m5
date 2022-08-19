import React from "react";
import S from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <p className={S.p}>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </p>
    </header>
  );
};

export default Header;
