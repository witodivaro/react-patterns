import logo from "./logo.svg";
import "./App.scss";
import MergeDestructuredProps from "./react-patterns/merge-destructured-props/MergeDestructuredProps";
import DefaultProps from "./react-patterns/default-props/DefaultProps";
import ArrayAsChildren from "./react-patterns/array-as-children/ArrayAsChildren";
import { ProxyComponent } from "./react-patterns/proxy-component/ProxyComponent";
import RenderProps from "./react-patterns/render-props/RenderProps";
import ChildrenPassThrough from "./react-patterns/children-pass-through/ChildrenPassThrough";
import StyleComponent from "./react-patterns/style-component/StyleComponent";
import EventSwitch from "./react-patterns/event-switch/EventSwitch";
import Layout from "./react-patterns/layout/Layout";
import Container from "./react-patterns/container/Container";
import HOC from "./react-patterns/HOC/HOC";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="React logo" />
        <h1 className="App__title">React patterns by Wito Divaro</h1>
      </header>
      <main className="App__patterns">
        <MergeDestructuredProps />
        <DefaultProps />
        <ArrayAsChildren />
        <ProxyComponent />
        <RenderProps />
        <ChildrenPassThrough />
        <StyleComponent />
        <EventSwitch />
        <Layout />
        <Container />
        <HOC />
      </main>
    </div>
  );
}

export default App;
