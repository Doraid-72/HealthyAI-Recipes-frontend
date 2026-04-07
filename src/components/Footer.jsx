import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* النص الأساسي */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} HealthyAI. جميع الحقوق محفوظة.
        </p>

        {/* روابط إضافية */}
        <div className="flex space-x-4">
          <a
            href="#about"
            className="hover:text-yellow-400 transition text-sm"
          >
            عن المشروع
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition text-sm"
          >
            تواصل معنا
          </a>
          <a
            href="#privacy"
            className="hover:text-yellow-400 transition text-sm"
          >
            سياسة الخصوصية
          </a>
        </div>
      </div>
    </footer>
  );
}