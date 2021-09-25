import clsx from "clsx";
import React, { useState } from "react";

import styles from "./ES.module.scss";
import ReactPattern from "../../components/ReactPattern";

function EventSwitch() {
  const [isHovered, setIsHovered] = useState(false);

  const handleEvent = (e) => {
    switch (e.type) {
      case "mouseleave":
        return setIsHovered(false);
      case "mouseenter":
        return setIsHovered(true);
      case "click":
        return alert("Clicked!");
      default:
        break;
    }
  };

  console.log(isHovered);

  return (
    <ReactPattern name="Event Switch">
      <button
        className={clsx(isHovered && styles.button_hovered)}
        onClick={handleEvent}
        onMouseLeave={handleEvent}
        onMouseEnter={handleEvent}
      >
        I handle everything with one handler
      </button>
    </ReactPattern>
  );
}

export default EventSwitch;
