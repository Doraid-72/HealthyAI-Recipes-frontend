import React, { useState, useEffect } from "react";
import "./App.css"; // ملف CSS خارجي للتصميم

// تحديد رابط الـ backend تلقائيًا (محلي أو منشور)
const backendUrl =
  process.env.NODE_ENV === "production"
    ? "https://healthyai-recipes-backend.onrender.com"
    : "http://localhost:3000";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [requests, setRequests] = useState([]);

  // إرسال الطلب إلى الـ backend
  const sendPrompt = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setReply(data.reply);
      fetchRequests();
    } catch (error) {
      console.error("Error sending prompt:", error);
    }
  };

  // جلب الطلبات السابقة من الـ backend
  const fetchRequests = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/ai/requests`);
      const data = await res.json();
      setRequests(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>HealthyAI Recipes</h1>
        <p>ذكاء اصطناعي يقدم وصفات صحية دقيقة</p>
      </header>

      <main className="app-main">
        <textarea
          className="prompt-box"
          rows="4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="أدخل مكوناتك أو سؤالك هنا..."
        />
        <button className="send-btn" onClick={sendPrompt}>
          إرسال
        </button>

        <section className="reply-section">
          <h2>الرد الحالي:</h2>
          <div className="reply-box">{reply}</div>
        </section>

        <section className="history-section">
          <h2>الطلبات السابقة:</h2>
          <ul>
            {requests.map((req) => (
              <li key={req.id} className="history-item">
                <strong>طلب:</strong> {req.prompt} <br />
                <strong>رد:</strong> {req.reply} <br />
                <em>تاريخ:</em> {new Date(req.created_at).toLocaleString()}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;