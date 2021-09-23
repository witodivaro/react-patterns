import React from "react";

const ChildrenPasser = ({ children }) => {
  // Anything can be here

  return React.Children.only(children);
};

export default ChildrenPasser;
