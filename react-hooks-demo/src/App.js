import './App.css';
import ClassCounterOne from './ClassCounterOne';
import CounterExample from './CounterExample';
import HookCounter from './HookCounter';
import HookCounterOne from './HookCounterOne';

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <CounterExample/>
      <HookCounterOne/>
      <ClassCounterOne/>
    </div>
  );
}

export default App;
