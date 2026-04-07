import React from "react";

export default function PaymentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">خيارات الدفع</h2>

        {/* الاشتراك الشهري */}
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="font-semibold mb-2">اشتراك شهري</h3>
          <p className="text-gray-600 mb-2">$10 / شهر</p>
          <button className="w-full bg-yellow-500 text-white py-2 rounded mb-2">
            ادفع عبر Zain Cash
          </button>
          <button className="w-full bg-purple-600 text-white py-2 rounded">
            ادفع عبر USDT
          </button>
        </div>

        {/* الاشتراك السنوي */}
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="font-semibold mb-2">اشتراك سنوي</h3>
          <p className="text-gray-600 mb-2">$90 / سنة (وفر 25%)</p>
          <button className="w-full bg-yellow-500 text-white py-2 rounded mb-2">
            ادفع عبر Zain Cash
          </button>
          <button className="w-full bg-purple-600 text-white py-2 rounded">
            ادفع عبر USDT
          </button>
        </div>

        {/* وصفة مفردة */}
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="font-semibold mb-2">وصفة مفردة</h3>
          <p className="text-gray-600 mb-2">$3 / وصفة</p>
          <button className="w-full bg-yellow-500 text-white py-2 rounded mb-2">
            ادفع عبر Zain Cash
          </button>
          <button className="w-full bg-purple-600 text-white py-2 rounded">
            ادفع عبر USDT
          </button>
        </div>

        {/* كتاب أو ملف PDF */}
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="font-semibold mb-2">كتاب / ملف PDF</h3>
          <p className="text-gray-600 mb-2">$7 / ملف</p>
          <button className="w-full bg-yellow-500 text-white py-2 rounded mb-2">
            ادفع عبر Zain Cash
          </button>
          <button className="w-full bg-purple-600 text-white py-2 rounded">
            ادفع عبر USDT
          </button>
        </div>

        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-2 rounded mt-4 hover:bg-red-700 transition"
        >
          إغلاق
        </button>
      </div>
    </div>
  );
}