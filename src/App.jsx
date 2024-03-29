import "./App.css";
//Pages
import { About } from "./pages/About";
import { Home } from "./pages/Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { HookUseContext } from "./components/HookuseContext";

function App() {
  return (
    <>
      <HookUseContext>
      <h1>React Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </>
  );
}

export default App;
