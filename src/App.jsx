import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// الصفحات
import Login from "./pages/Login";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";
import Recipes from "./pages/Recipes";

// المكونات
import ChatInterface from "./components/ChatInterface";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* شريط التنقل */}
        <Navbar />

        {/* المحتوى الرئيسي */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/chat" element={<ChatInterface />} />
          </Routes>
        </div>

        {/* الفوتر */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;