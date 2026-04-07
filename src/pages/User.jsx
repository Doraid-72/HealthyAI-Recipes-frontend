import React from "react";
import { useNavigate } from "react-router-dom";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "صباح الخير";
  if (hour < 18) return "مساء الخير";
  return "ليلة سعيدة";
}

export default function User() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-96 text-center">
        {/* صورة رمزية (Avatar) */}
        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500"
        />

        <h1 className="text-2xl font-bold mb-2">صفحة المستخدم</h1>
        <p className="mb-4">
          {getGreeting()} {username} 👋، هذه هي صفحتك كمستخدم عادي.
        </p>

        {/* أزرار التنقل */}
        <button
          onClick={() => navigate("/recipes")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4 w-full"
        >
          🍲 الذهاب إلى الوصفات الغذائية
        </button>
        <button
          onClick={() => navigate("/myrecipes")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 w-full"
        >
          📖 عرض وصفاتي المحفوظة
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
        >
          🚪 تسجيل الخروج
        </button>
      </div>
    </div>
  );
}