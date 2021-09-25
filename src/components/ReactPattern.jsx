import React from "react";

const ReactPattern = ({ children, name }) => {
  return (
    <div className="App__pattern">
      <h3>{name}</h3>
      {children}
    </div>
  );
};

export default ReactPattern;
