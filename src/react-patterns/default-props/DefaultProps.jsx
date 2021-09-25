import React from "react";
import ReactPattern from "../../components/ReactPattern";

import styles from "./DP.module.scss";

function DefaultProps({ content }) {
  return (
    <ReactPattern name="Default Props">
      <p>I didn't pass the following rendered prop:</p>
      <p className={styles.defaultProp}>{content}</p>
    </ReactPattern>
  );
}

DefaultProps.defaultProps = {
  content: "Hero!",
};

export default DefaultProps;
