import React from "react";

import styles from "./DP.module.scss";

function DefaultProps({ content }) {
  return (
    <div className={styles.container}>
      <h3>Default props</h3>
      <p>I didn't pass the following rendered prop:</p>
      <p className={styles.defaultProp}>{content}</p>
    </div>
  );
}

DefaultProps.defaultProps = {
  content: "Hero!",
};

export default DefaultProps;
