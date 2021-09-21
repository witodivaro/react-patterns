import React from "react";

import Button from "./components/Button";

import styles from "./MDP.module.scss";

const MergeDestructuredProps = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Merge Desctructured Props</h2>
      <p>I want this button to have MY classNames aswell</p>

      <Button className={styles.container__button}>I merge props!</Button>
    </div>
  );
};

export default MergeDestructuredProps;
