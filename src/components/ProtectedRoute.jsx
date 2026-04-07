import { Navigate } from "react-router-dom";

// هذا المكون يحمي المسارات حسب الدور المسموح
const ProtectedRoute = ({ children, allowedRole }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // إذا لم يكن هناك مستخدم مسجل الدخول → تحويل إلى صفحة تسجيل الدخول
    return <Navigate to="/login" />;
  }

  if (allowedRole && user.role !== allowedRole) {
    // إذا كان الدور غير مطابق → تحويل إلى صفحة المستخدم
    return <Navigate to="/user" />;
  }

  return children;
};

export default ProtectedRoute;