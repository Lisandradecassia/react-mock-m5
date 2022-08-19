import React from "react";
import S from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <p className={S.p}>Testando suas habilidades em HTML, CSS e JS.</p>
      <p className={S.p}>Linx Impulse</p>
      <p className={S.p}>2019</p>
    </footer>
  );
};

export default Footer;