// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Knowledge from "./pages/Knowledge";
import CalculatorPage from "./pages/Calculator";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/knowledge-hub" element={<Knowledge />} />
            <Route path="/calculate-interest" element={<CalculatorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
