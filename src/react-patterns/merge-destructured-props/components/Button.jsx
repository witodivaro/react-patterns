import React from "react";
import styles from "./Button.module.scss";

const Button = ({ className, children }) => {
  // Props merging with own values
  const classNames = [className, styles.button].join(" ");

  return <button className={classNames}>{children}</button>;
};

export default Button;
