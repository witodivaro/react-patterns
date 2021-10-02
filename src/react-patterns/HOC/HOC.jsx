import React, { useEffect, useState } from "react";
import ReactPattern from "../../components/ReactPattern";

const fetchElements = async () =>
  new Promise((resolve) => {
    const elements = [1, 2, 3, 4, "text"];

    setTimeout(() => {
      resolve(elements);
    }, 1000);
  });

// Higher Order Component is just a generic container
const HigherOrderComponent = (ComposedComponent) =>
  function WrappedComponent(props) {
    const [elements, setElements] = useState([]);

    useEffect(() => {
      const fetch = async () => {
        const elems = await fetchElements();
        setElements(elems);
      };

      fetch();
    }, []);

    return <ComposedComponent {...props} elements={elements} />;
  };
const Component = ({ elements, someOtherProp }) => {
  return (
    <div>
      <p style={{ display: "inline" }}>Passed prop: {someOtherProp}</p>
      {elements.map((elem) => (
        <span style={{ marginLeft: 10 }}>{elem}</span>
      ))}
    </div>
  );
};

const WrappedComponent = HigherOrderComponent(Component);

const HOC = () => {
  return (
    <ReactPattern name="Higher Order component">
      <WrappedComponent someOtherProp="asd" />
    </ReactPattern>
  );
};

export default HOC;
