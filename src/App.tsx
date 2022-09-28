import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LayoutContainer from "./Layout";
import { Routes, Route } from "react-router-dom";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<Menu1 />} />
          <Route path="menu1" element={<Menu1 />} />
          <Route path="menu2" element={<Menu2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
