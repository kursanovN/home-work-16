import { Count } from "./components/count/Count";
import { MyInput } from "./components/input/InputValidationForm";
import { Timer } from "./components/timer/Timer";
import './App.css'

function App() {
  return (
    <div className="app">
      <Count />
      <MyInput />
      <Timer />
    </div>
  );
}

export default App;
