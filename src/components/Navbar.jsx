import React from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode, language, toggleLanguage }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 shadow-md">
      {/* شعار التطبيق */}
      <div className="flex items-center gap-2">
        <img
          src="/logo-3d.png"
          alt="HealthyAI Logo"
          style={{ width: "45px", height: "45px" }}
        />
        <span className="font-bold text-green-600 text-xl">
          HealthyAI
        </span>
      </div>

      {/* روابط التنقل */}
      <div className="flex gap-4 text-sm md:text-base">
        <Link to="/login">{language === "ar" ? "تسجيل الدخول" : "Login"}</Link>
        <Link to="/register">{language === "ar" ? "تسجيل" : "Register"}</Link>
        <Link to="/recipes">{language === "ar" ? "الوصفات" : "Recipes"}</Link>
        <Link to="/myrecipes">{language === "ar" ? "وصفاتي" : "My Recipes"}</Link>
        <Link to="/payment">{language === "ar" ? "الدفع" : "Payment"}</Link>
      </div>

      {/* أزرار التحكم */}
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
  );
}

export default Navbar;