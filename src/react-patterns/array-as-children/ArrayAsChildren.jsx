import React from "react";
import ReactPattern from "../../components/ReactPattern";

import styles from "./AAS.module.scss";

const someText = ["text1", "text2"];

const ArrayAsChildren = () => {
  return (
    <ReactPattern name="Array As Children">
      <div className={styles.arrayAsChildren}>
        {someText.map((text) => (
          <span key={text}>{text}</span>
        ))}
      </div>
      <div className={styles.arrayAsChildren}>
        {[<span key="1">Text1</span>, <span key="2">Text2</span>]}
      </div>
    </ReactPattern>
  );
};

export default ArrayAsChildren;
