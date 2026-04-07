import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // ملف الاتصال مع Supabase

export default function LoginAdminSupervisors() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // البحث عن المستخدم في قاعدة البيانات
    const { data: users, error: dbError } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("password", password); // ⚠️ لاحقًا نستبدلها بالتحقق المشفر

    if (dbError) {
      setError("خطأ في الاتصال بقاعدة البيانات");
      return;
    }

    if (!users || users.length === 0) {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
      return;
    }

    const user = users[0];

    // توجيه حسب الدور
    if (user.role === "admin") {
      navigate("/admin");
    } else if (user.role === "supervisor") {
      navigate("/supervisors");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">تسجيل دخول الإدارة</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring"
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}