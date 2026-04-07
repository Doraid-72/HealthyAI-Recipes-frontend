import React, { useState } from "react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "أهلاً! كيف أقدر أساعدك اليوم؟" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // إضافة رسالة المستخدم
    const newMessages = [...messages, { sender: "user", text: input }];

    // محاكاة رد ذكي من النظام
    let aiResponse;
    if (input.includes("وصفة")) {
      aiResponse = {
        sender: "ai",
        text: "إليك وصفة صحية مقترحة:",
        card: {
          type: "recipe",
          title: "شوفان بالتوت",
          ingredients: ["شوفان", "حليب", "توت", "عسل"],
          steps: [
            "ضع الشوفان مع الحليب في وعاء.",
            "أضف التوت والعسل.",
            "امزج جيدًا وقدّمها طازجة.",
          ],
        },
      };
    } else if (input.includes("كتاب")) {
      aiResponse = {
        sender: "ai",
        text: "إليك كتاب إلكتروني مقترح:",
        card: {
          type: "ebook",
          title: "دليل التغذية الصحية",
          description: "كتاب PDF يحتوي على نصائح غذائية متكاملة.",
          link: "#",
        },
      };
    } else {
      aiResponse = {
        sender: "ai",
        text: "أستطيع أن أساعدك بالوصفات أو الكتب أو ملفات PDF. جرب أن تطلب وصفة أو كتاب.",
      };
    }

    setMessages([...newMessages, aiResponse]);
    setInput("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 text-center font-bold">
        HealthyAI Chat
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800 shadow"
              }`}
            >
              <p>{msg.text}</p>

              {/* عرض بطاقة الوصفة أو الكتاب */}
              {msg.card && msg.card.type === "recipe" && (
                <div className="mt-3 border rounded p-3 bg-gray-50">
                  <h3 className="font-bold mb-2">{msg.card.title}</h3>
                  <p className="text-sm text-gray-600">المكونات:</p>
                  <ul className="list-disc list-inside text-sm mb-2">
                    {msg.card.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600">الخطوات:</p>
                  <ol className="list-decimal list-inside text-sm">
                    {msg.card.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {msg.card && msg.card.type === "ebook" && (
                <div className="mt-3 border rounded p-3 bg-gray-50">
                  <h3 className="font-bold mb-2">{msg.card.title}</h3>
                  <p className="text-sm mb-2">{msg.card.description}</p>
                  <a
                    href={msg.card.link}
                    className="text-blue-600 underline text-sm"
                  >
                    تحميل الكتاب
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white flex">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
          placeholder="اكتب رسالتك هنا..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          إرسال
        </button>
      </div>
    </div>
  );
}