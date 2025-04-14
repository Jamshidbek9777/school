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
      <div className="pt-24 pb-16">
        <div className="grid md:grid-cols-2 items-center  gap-12">
          {/* Left Image */}
          <div className="hidden md:block">
            <img
              src="/img/contact.png"
              alt="Contact Illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Contact Form */}
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

        {/* Location Section */}
        <div className="max-w-6xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-[#050a41] mb-4">
            📍 Our School Location
          </h3>
          <p className="text-gray-700 mb-6">
            EduSchool, Mustaqillik ko‘chasi 45, Tashkent, Uzbekistan
          </p>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
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
