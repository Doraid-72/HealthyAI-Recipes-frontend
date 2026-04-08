import React, { useState } from "react";

// رقم الهاتف الخاص بمحفظة Zain Cash
// يمكن تغييره لاحقًا بسهولة أو وضعه في ملف إعدادات/متغير بيئة
const ZAINCASH_NUMBER = "009647817092212";

function Payment() {
  const [transactionId, setTransactionId] = useState("");
  const [userIdentifier, setUserIdentifier] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إرسال بيانات المستخدم ورقم العملية إلى الـ backend للتحقق
    alert(`تم تسجيل عملية الدفع للمستخدم: ${userIdentifier} برقم العملية: ${transactionId}`);
  };

  return (
    <div className="payment-page">
      <h1>الدفع عبر Zain Cash</h1>
      <p>قم بتحويل المبلغ إلى رقم الهاتف: <strong>{ZAINCASH_NUMBER}</strong></p>
      <p>أو امسح الباركود التالي من تطبيق Zain Cash:</p>

      {/* صورة الباركود محفوظة في مجلد public */}
      <img src="/zaincash-qr.png" alt="Zain Cash QR" style={{ width: "200px" }} />

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label>اسم المستخدم أو البريد الإلكتروني:</label>
        <input
          type="text"
          value={userIdentifier}
          onChange={(e) => setUserIdentifier(e.target.value)}
          placeholder="أدخل اسمك أو بريدك الإلكتروني"
          required
        />

        <label style={{ marginTop: "10px" }}>أدخل رقم العملية بعد التحويل:</label>
        <input
          type="text"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          placeholder="مثال: 123456789"
          required
        />

        <button type="submit" style={{ marginTop: "15px" }}>تأكيد الدفع</button>
      </form>
    </div>
  );
}

export default Payment;