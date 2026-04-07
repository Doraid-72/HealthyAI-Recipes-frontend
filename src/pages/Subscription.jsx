import React from "react";

export default function Subscription() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">اختر خطتك</h1>

        {/* خطط الاشتراك */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">اشتراك شهري</h2>
            <p className="text-gray-600 mb-4">$10 / شهر</p>
            <button className="w-full bg-yellow-500 text-white py-2 rounded mb-2">
              ادفع عبر Zain Cash
            </button>
            <button className="w-full bg-purple-600 text-white py-2 rounded">
              ادفع عبر USDT
            </button>
          </div>

          <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">اشتراك سنوي</h2>
            <p className="text-gray-600 mb-4">$90 / سنة (وفر 25%)</p>
            <button className="w-full bg-yellow-500 text-white py-2 rounded mb-2">
              ادفع عبر Zain Cash
            </button>
            <button className="w-full bg-purple-600 text-white py-2 rounded">
              ادفع عبر USDT
            </button>
          </div>
        </div>

        {/* شراء وصفة آنية */}
        <h2 className="text-xl font-bold text-center mb-4">شراء وصفة آنية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">وصفة غذائية</h3>
            <p className="text-gray-600 mb-4">وصفة واحدة مع خطوات التحضير</p>
            <button className="w-full bg-green-600 text-white py-2 rounded">
              شراء الآن
            </button>
          </div>

          <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">كتاب / ملف PDF</h3>
            <p className="text-gray-600 mb-4">ملف واحد للتحميل الفوري</p>
            <button className="w-full bg-green-600 text-white py-2 rounded">
              شراء الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}