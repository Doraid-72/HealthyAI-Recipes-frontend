import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* شعار التطبيق */}
        <div className="text-xl font-bold">
          HealthyAI
        </div>

        {/* روابط التنقل */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-300 transition">
            تسجيل الدخول
          </Link>
          <Link to="/subscription" className="hover:text-yellow-300 transition">
            الاشتراكات
          </Link>
          <Link to="/chat" className="hover:text-yellow-300 transition">
            المحادثة
          </Link>
          <Link to="/recipes" className="hover:text-yellow-300 transition">
            الوصفات
          </Link>
          <Link to="/dashboard" className="hover:text-yellow-300 transition">
            لوحة التحكم
          </Link>
        </div>
      </div>
    </nav>
  );
}