import React, { useState } from "react";
import PaymentModal from "../components/PaymentModal";

export default function Checkout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">إتمام عملية الدفع</h1>
        <p className="text-gray-700 mb-6">
          اختر طريقة الدفع المناسبة لإكمال اشتراكك أو شراءك.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          فتح خيارات الدفع
        </button>

        {/* نافذة الدفع */}
        <PaymentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}