import "./index.css";
import Test from "./components/Test";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Errof from "./components/Errorf";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Test>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Errof />} />
        </Routes>
      </Test>
    </BrowserRouter>
  );
}

export default App;