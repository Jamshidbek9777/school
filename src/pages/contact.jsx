import React, { useState } from "react";
import Wrapper from "../shared/wrapper";

const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID"; // could be user or group ID

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
          headers: {
            "Content-Type": "application/json",
          },
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
      console.error("Failed to send message to Telegram:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      sendToTelegram();
    }
  };

  return (
    <Wrapper>
      <div className="pt-24 pb-16 px-4">
        <div className="grid md:grid-cols-2 items-center max-w-6xl mx-auto gap-12">
          <div className="hidden md:block">
            <img
              src="/img/contact.png"
              alt="Contact Illustration"
              className="w-full max-w-md"
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-[#050a41] mb-6">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c1f52]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c1f52]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c1f52]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#1c1f52] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#15173d] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-600 font-medium mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
