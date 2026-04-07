import React from "react";
import { useNavigate } from "react-router-dom";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "صباح الخير";
  if (hour < 18) return "مساء الخير";
  return "ليلة سعيدة";
}

export default function Supervisors() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1>لوحة التحكم - المشرفين</h1>
      <p>
        {getGreeting()} {username} 👋، لديك صلاحيات محدودة.
      </p>
      <ul>
        <li>إدارة المحتوى</li>
        <li>متابعة المستخدمين</li>
        <li>لا يمكنك الوصول إلى إعدادات الأدمن أو البيانات الحساسة</li>
      </ul>
      <button onClick={handleLogout}>تسجيل الخروج</button>
    </div>
  );
}