import RouterCustom from "./RouterMaster";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </div>
  );
}

export default App;
