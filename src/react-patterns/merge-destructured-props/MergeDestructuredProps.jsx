import React from "react";
import ReactPattern from "../../components/ReactPattern";

import Button from "./components/Button";

import styles from "./MDP.module.scss";

const MergeDestructuredProps = () => {
  return (
    <ReactPattern name="Merge Desctructured Props">
      <p>I want this button to have MY classNames aswell</p>
      <Button className={styles.container__button}>I merge props!</Button>
    </ReactPattern>
  );
};

export default MergeDestructuredProps;
