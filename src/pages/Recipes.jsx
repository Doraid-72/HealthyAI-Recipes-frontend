import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Recipes() {
  const [ingredients, setIngredients] = useState("");
  const [dietType, setDietType] = useState("vegetarian");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const username = localStorage.getItem("username");

  const getRecipe = async (customPrompt = null) => {
    setLoading(true);
    setRecipe("");
    try {
      const response = await fetch("http://localhost:5000/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredients,
          dietType,
          username,
          customPrompt,
        }),
      });
      const data = await response.json();
      setRecipe(data.recipe);
      toast.success("تم توليد الوصفة بنجاح ✅");
    } catch (err) {
      toast.error("⚠️ خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          احصل على وصفة غذائية صحية 🍲
        </h1>
        <input
          type="text"
          placeholder="أدخل المكونات"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border rounded px-3 py-2 w-full mb-4"
        />
        <select
          value={dietType}
          onChange={(e) => setDietType(e.target.value)}
          className="border rounded px-3 py-2 w-full mb-4"
        >
          <option value="vegetarian">نباتي</option>
          <option value="vegan">فيجن</option>
          <option value="pescatarian">سمكي</option>
          <option value="keto">كيتو</option>
          <option value="lowcarb">منخفض الكربوهيدرات</option>
        </select>
        <button
          onClick={() => getRecipe()}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mb-4"
        >
          توليد وصفة
        </button>
        <button
          onClick={() => getRecipe("اقترح وجبة صحية لليوم")}
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
        >
          🍽️ وجبة اليوم
        </button>

        {loading && (
          <div className="mt-6 text-center text-gray-600">⏳ جاري توليد الوصفة...</div>
        )}

        {recipe && (
          <div className="mt-6 bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">الوصفة:</h2>
            <p className="whitespace-pre-line">{recipe}</p>
          </div>
        )}
      </div>
    </div>
  );
}