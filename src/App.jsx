import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
