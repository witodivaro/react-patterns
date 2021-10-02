import React from "react";

import ReactPattern from "../../components/ReactPattern";

const LayoutComponent = ({ children }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <header style={{ marginBottom: 10, fontSize: 10 }}>Some header</header>
      <main>{children}</main>
    </div>
  );
};

const Layout = () => {
  return (
    <ReactPattern name="Layout">
      <LayoutComponent>
        <div>I'm inside the layout!</div>
      </LayoutComponent>
    </ReactPattern>
  );
};

export default Layout;
