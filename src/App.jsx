import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Supervisors from "./pages/Supervisors";
import User from "./pages/User";
import Recipes from "./pages/Recipes";
import MyRecipes from "./pages/MyRecipes";
import Payment from "./pages/Payment"; // صفحة الدفع الجديدة

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar"); // اللغة الافتراضية عربية

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
        <Router>
          {/* شريط علوي للتنقل */}
          <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
            <div className="flex gap-4">
              <Link to="/login">{language === "ar" ? "تسجيل الدخول" : "Login"}</Link>
              <Link to="/register">{language === "ar" ? "تسجيل" : "Register"}</Link>
              <Link to="/recipes">{language === "ar" ? "الوصفات" : "Recipes"}</Link>
              <Link to="/myrecipes">{language === "ar" ? "وصفاتي" : "My Recipes"}</Link>
              <Link to="/payment">{language === "ar" ? "الدفع" : "Payment"}</Link>
            </div>

            <div className="flex gap-2">
              {/* زر الوضع الليلي */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-yellow-400 dark:text-black"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              {/* زر تغيير اللغة */}
              <button
                onClick={toggleLanguage}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
              >
                {language === "ar" ? "English" : "عربي"}
              </button>
            </div>
          </nav>

          {/* المسارات */}
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
      </div>
    </div>
  );
}

export default App;