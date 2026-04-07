import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-2">المكونات:</p>
        <ul className="list-disc list-inside text-sm mb-3">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
        <p className="text-gray-600 mb-2">الخطوات:</p>
        <ol className="list-decimal list-inside text-sm">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}