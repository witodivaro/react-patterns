import React, { useEffect, useState } from "react";
import ReactPattern from "../../components/ReactPattern";

const fetchElements = async () =>
  new Promise((resolve) => {
    const elements = [1, 2, 3, 4, "text"];

    setTimeout(() => {
      resolve(elements);
    }, 1000);
  });

const DumbComponent = ({ elements }) => {
  return (
    <div>
      {elements.map((element) => (
        <span style={{ marginLeft: 10 }}>{element}</span>
      ))}
    </div>
  );
};

const DumbComponentContainer = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const elements = await fetchElements();
      setElements(elements);
    };

    fetch();
  }, []);

  return <DumbComponent elements={elements} />;
};

const Container = () => {
  return (
    <ReactPattern name="Container">
      <DumbComponentContainer />
    </ReactPattern>
  );
};

export default Container;
