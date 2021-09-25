import React from "react";
import ReactPattern from "../../components/ReactPattern";
import ChildrenPasser from "./ChildrenPasser";

const ChildrenPassThrough = () => {
  return (
    <ReactPattern name="Children Pass Through">
      <ChildrenPasser>
        <p>This tag is passed through a children passer</p>
      </ChildrenPasser>
    </ReactPattern>
  );
};

export default ChildrenPassThrough;
