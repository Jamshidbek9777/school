import React, { useState } from "react";
import Wrapper from "./wrapper";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
  const CHAT_ID = "YOUR_CHAT_ID_HERE";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `📬 New Message from School Website\n\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n📝 Message: ${form.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
          }),
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Something went wrong.");
    }
  };

  return (
    <Wrapper>
      <div className="my-10">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl  overflow-hidden">
          <div className="md:w-1/2  flex items-center justify-center p-6">
            <img
              src="/img/getintouch.png"
              alt="Contact Illustration"
              className="w-full max-w-sm object-contain"
            />
          </div>

          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-[#050a41] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Send us a message and we’ll respond
              shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
              >
                Send Message
              </button>
              {status && <p className="text-sm mt-2 text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
