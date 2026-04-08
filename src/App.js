import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Supervisors from "./pages/Supervisors";
import User from "./pages/User";
import Recipes from "./pages/Recipes";
import MyRecipes from "./pages/MyRecipes";
import Payment from "./pages/Payment";

import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [loading, setLoading] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  useEffect(() => {
    document.title = language === "ar" ? "HealthyAI وصفات" : "HealthyAI Recipes";
  }, [language]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
        {loading ? (
          <SplashScreen onFinish={() => setLoading(false)} />
        ) : (
          <Router>
            <Navbar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              language={language}
              toggleLanguage={toggleLanguage}
            />

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/supervisors" element={<Supervisors />} />
              <Route path="/user" element={<User />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/myrecipes" element={<MyRecipes />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;