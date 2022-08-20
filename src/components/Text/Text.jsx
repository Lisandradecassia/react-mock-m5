import React from "react";
import S from "./Text.module.css";

const Text = () => {
  return (
    <div className={S.textDiv}>
      <h2 className={S.h2}>Ajude o algoritmo a ser mais certeiro</h2>
      <p className={S.p}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className={S.p}>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content. The passage experienced a surge in popularity during the
        1960s when Letraset used it on their dry-transfer sheets, and again
        during the 90s as desktop publishers bundled the text with their
        software.
      </p>
    </div>
  );
};

export default Text;
