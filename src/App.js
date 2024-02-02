import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
