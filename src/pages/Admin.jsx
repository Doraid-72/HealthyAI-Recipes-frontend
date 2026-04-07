import React from "react";
import { useNavigate } from "react-router-dom";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "صباح الخير";
  if (hour < 18) return "مساء الخير";
  return "ليلة سعيدة";
}

export default function Admin() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">لوحة التحكم - الأدمن</h1>
        <p className="mb-4">
          {getGreeting()} {username} 👋، لديك صلاحيات كاملة لإدارة النظام.
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}