// import logo from './logo.svg';
import './App.css';
// import Counter from  './Counter'
import CounterHook from './CounterHook';
import Conditionals from './Conditionals';

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      {/* <Counter /> */}
      <CounterHook />
      <Conditionals />
    </div>
  );
}

export default App;
