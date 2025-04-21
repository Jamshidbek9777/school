import React, { useState } from "react";
import Wrapper from "../shared/wrapper";

const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendToTelegram = async () => {
    const message = `📬 *New Contact Form Submission* \n\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n📝 Message:\n${form.message}`;
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Telegram Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) sendToTelegram();
  };

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        {/* Modern Form Card */}
        <div className="bg-white/50 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-center text-[#050a41] mb-8">
            📩 Bog'lanish
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                To'liq ismingiz
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Ismingiz"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="someone@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Xabar
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Xabaringizni kiriting..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>

            {success && (
              <p className="text-green-600 text-center mt-4 font-medium">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>

          <div className="mt-10 border-t pt-8">
            <h3 className="text-xl font-bold text-[#050a41] mb-4">
              📞 Bog'lanish uchun ma'lumot
            </h3>
            <p className="text-gray-800 mb-2">
              Telefon raqam:{" "}
              <a href="tel:+998901234567" className="text-blue-600">
                +998 90 123 45 67
              </a>
            </p>
            <p className="text-gray-800 mb-4">
              Email:{" "}
              <a href="mailto:info@eduschool.uz" className="text-blue-600">
                info@eduschool.uz
              </a>
            </p>
          </div>
        </div>

        <div className="mt-20 bg-white shadow-lg rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#050a41] mb-3">
            📍 Bizning manzil
          </h3>
          <p className="text-gray-700 mb-6">
            aa, Mustaqillik ko‘chasi 45, Tashkent, Uzbekistan
          </p>
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.559692478891!2d69.2887889154211!3d41.31108140738292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4b1c456cba3%3A0x9f2bcabc4c1166d1!2sMustaqillik%20Street%2045%2C%20Tashkent!5e0!3m2!1sen!2s!4v1684855534503!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
