import logo from "./logo.svg";
import "./App.scss";
import MergeDestructuredProps from "./react-patterns/merge-destructured-props/MergeDestructuredProps";
import DefaultProps from "./react-patterns/default-props/DefaultProps";
import ArrayAsChildren from "./react-patterns/array-as-children/ArrayAsChildren";

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
      </main>
    </div>
  );
}

export default App;
