import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`http://localhost:5000/myrecipes/${username}`);
        const data = await response.json();
        setRecipes(data.recipes || []);
      } catch (err) {
        toast.error("⚠️ خطأ في جلب الوصفات");
      }
    };
    fetchRecipes();
  }, [username]);

  const deleteRecipe = async (id) => {
    try {
      await fetch(`http://localhost:5000/myrecipes/${id}`, {
        method: "DELETE",
      });
      setRecipes(recipes.filter((r) => r.id !== id));
      toast.success("✅ تم حذف الوصفة بنجاح");
    } catch (err) {
      toast.error("⚠️ خطأ في حذف الوصفة");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">📖 وصفاتي المحفوظة</h1>

        <button
          onClick={() => navigate("/user")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-6"
        >
          ⬅️ الرجوع إلى صفحة المستخدم
        </button>

        {recipes.length === 0 ? (
          <p className="text-center text-gray-600">لا توجد وصفات محفوظة بعد.</p>
        ) : (
          <ul className="space-y-4">
            {recipes.map((r) => (
              <li key={r.id} className="bg-gray-100 p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">
                  {r.ingredients} ({r.dietType})
                </h2>
                <p className="whitespace-pre-line mb-2">{r.recipe}</p>
                <p className="text-sm text-gray-500 mb-4">
                  📅 تاريخ الإنشاء: {new Date(r.created_at).toLocaleString()}
                </p>
                <button
                  onClick={() => deleteRecipe(r.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  حذف الوصفة
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}