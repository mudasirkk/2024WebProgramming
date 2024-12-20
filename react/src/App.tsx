import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

const Home = () => (
  <div>
    <h1 className="title">Home Page</h1>
    <h2 className="subtitle">This is our home page</h2>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
