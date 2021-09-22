import React from "react";

import styles from "./AAS.module.scss";

const someText = ["text1", "text2"];

const ArrayAsChildren = () => {
  return (
    <div className={styles.container}>
      <h3>Array as children</h3>
      <div className={styles.arrayAsChildren}>
        {someText.map((text) => (
          <span>{text}</span>
        ))}
      </div>
      <div className={styles.arrayAsChildren}>
        {[<span>Text1</span>, <span>Text2</span>]}
      </div>
    </div>
  );
};

export default ArrayAsChildren;
