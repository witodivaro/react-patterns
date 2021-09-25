import React from "react";

import ReactPattern from "../../components/ReactPattern";

const ProxyInput = (props) => {
  // Pass props to the tag with initial attributes
  // "proxy" props
  return <input type="text" {...props} />;
};

export const ProxyComponent = () => {
  return (
    <ReactPattern name="Proxy Component">
      <ProxyInput name="login" placeholder="login" />
    </ReactPattern>
  );
};
