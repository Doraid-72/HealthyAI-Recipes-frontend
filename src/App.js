import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Supervisors from "./pages/Supervisors";
import User from "./pages/User";
import Recipes from "./pages/Recipes";
import MyRecipes from "./pages/MyRecipes";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
        <Router>
          {/* زر التبديل بين الوضع الليلي والفاتح */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 dark:bg-yellow-400 dark:text-black"
            >
              {darkMode ? "☀️ الوضع الفاتح" : "🌙 الوضع الليلي"}
            </button>
          </div>

          {/* المسارات */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRole="admin">
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/supervisors"
              element={
                <ProtectedRoute allowedRole="supervisor">
                  <Supervisors />
                </ProtectedRoute>
              }
            />

            <Route
              path="/user"
              element={
                <ProtectedRoute allowedRole="user">
                  <User />
                </ProtectedRoute>
              }
            />

            <Route
              path="/recipes"
              element={
                <ProtectedRoute allowedRole="user">
                  <Recipes />
                </ProtectedRoute>
              }
            />

            <Route
              path="/myrecipes"
              element={
                <ProtectedRoute allowedRole="user">
                  <MyRecipes />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>

        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme={darkMode ? "dark" : "light"}
        />
      </div>
    </div>
  );
}

export default App;