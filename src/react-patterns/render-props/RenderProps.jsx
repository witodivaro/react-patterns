import React from "react";
import ReactPattern from "../../components/ReactPattern";

import Time from "./Time";

const RenderProps = () => {
  return (
    <ReactPattern name="Render props">
      <Time>
        {(currentTime) => (
          <div>Rendered at {new Date(currentTime).toISOString()}</div>
        )}
      </Time>
    </ReactPattern>
  );
};

export default RenderProps;
