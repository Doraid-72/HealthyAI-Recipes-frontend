import React from "react";
import { Navigate } from "react-router-dom";

// هذا المكون يستقبل children والدور المسموح به
// إذا لم يكن المستخدم مسجلاً أو ليس لديه الدور الصحيح، يتم تحويله إلى صفحة تسجيل الدخول
const ProtectedRoute = ({ allowedRole, children }) => {
  // مثال: جلب بيانات المستخدم من localStorage أو من سياق (Context)
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // إذا لم يكن هناك مستخدم مسجل الدخول
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    // إذا كان الدور غير مطابق للدور المطلوب
    return <Navigate to="/login" replace />;
  }

  // إذا كان كل شيء صحيح، يتم عرض المكون المطلوب
  return children;
};

export default ProtectedRoute;