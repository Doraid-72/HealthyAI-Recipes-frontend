import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("role", data.role);
        localStorage.setItem("username", username);

        toast.success("✅ تسجيل الدخول ناجح");

        if (data.role === "admin") navigate("/admin");
        else if (data.role === "supervisor") navigate("/supervisors");
        else navigate("/user");
      } else {
        toast.error(`❌ خطأ: ${data.error}`);
      }
    } catch (err) {
      toast.error("⚠️ خطأ في الاتصال بالسيرفر");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">تسجيل الدخول</h1>
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          دخول
        </button>
      </div>
    </div>
  );
}