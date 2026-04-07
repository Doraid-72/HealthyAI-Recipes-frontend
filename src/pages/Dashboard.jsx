import React from "react";

export default function Dashboard() {
  // بيانات تجريبية (لاحقًا تربط مع قاعدة بيانات أو API)
  const currentPlan = {
    type: "سنوي",
    expiry: "يناير 2027",
  };

  const purchases = {
    recipes: ["شوفان بالتوت", "سلطة خضراء"],
    ebooks: ["دليل التغذية الصحية", "كتاب الحمية النباتية"],
    pdfs: ["خطة غذائية PDF", "تمارين رياضية PDF"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        لوحة التحكم
      </h1>

      {/* الاشتراك الحالي */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">اشتراكك الحالي</h2>
        <p className="text-gray-700">
          النوع: {currentPlan.type} — صالح حتى {current