import clsx from "clsx";
import React from "react";

import styles from "./SC.module.scss";

import ReactPattern from "../../components/ReactPattern";

const StyledButton = ({ className, blue, children }) => (
  <button
    className={clsx({
      [styles.button]: true,
      [styles["button--blue"]]: blue,
      [className]: true,
    })}
  >
    {children}
  </button>
);

const StyleComponent = () => {
  return (
    <ReactPattern name="Style Component">
      <StyledButton blue>Click me</StyledButton>
      <StyledButton>Click me</StyledButton>
    </ReactPattern>
  );
};

export default StyleComponent;
