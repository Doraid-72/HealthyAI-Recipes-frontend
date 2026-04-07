import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  // جلب الدور المخزن بعد تسجيل الدخول
  const role = localStorage.getItem("role");

  if (!role) {
    // إذا لم يكن هناك تسجيل دخول → رجوع إلى صفحة login
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    // إذا الدور غير مسموح → رجوع إلى صفحة login
    return <Navigate to="/login" replace />;
  }

  // إذا كل شيء صحيح → عرض الصفحة
  return children;
}
