import Calculator from "./components/Calculator";
import './App.css';
import { ProcessProvider } from "./context/ProcessContext";

function App() {
  return (
    <div className="App">
      <ProcessProvider>
        <Calculator />
      </ProcessProvider>
    </div>
  );
}

export default App;
