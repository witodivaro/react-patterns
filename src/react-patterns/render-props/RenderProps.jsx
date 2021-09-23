import React from "react";

import styles from './RP.module.scss';

import Time from "./Time";

const RenderProps = () => {
  return (
    <div className={styles.rp}>
      <h3>Render props</h3>
      <Time>
        {(currentTime) => (
          <div>Rendered at {new Date(currentTime).toISOString()}</div>
        )}
      </Time>
    </div>
  );
};

export default RenderProps;
