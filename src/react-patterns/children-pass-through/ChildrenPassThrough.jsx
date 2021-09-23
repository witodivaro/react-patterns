import React from "react";
import ChildrenPasser from "./ChildrenPasser";

import styles from "./CPT.module.scss";

const ChildrenPassThrough = () => {
  return (
    <ChildrenPasser>
      <div className={styles.cpt}>
        <h3>Children pass through</h3>
        <p>These tags are passed through a children passer</p>
      </div>
    </ChildrenPasser>
  );
};

export default ChildrenPassThrough;
