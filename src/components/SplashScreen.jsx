import React, { useEffect } from "react";

function SplashScreen({ onFinish }) {
  useEffect(() => {
    // إخفاء الشاشة بعد 3 ثوانٍ
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        {/* شعار التطبيق */}
        <img
          src="/logo-3d.png"
          alt="HealthyAI Logo"
          style={{ width: "120px", height: "120px", margin: "0 auto" }}
        />
        <h1 className="mt-4 text-2xl font-bold text-green-600">
          HealthyAI Recipes
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          جاري التحميل...
        </p>
      </div>
    </div>
  );
}

export default SplashScreen;