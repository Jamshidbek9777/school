import React, { useState } from "react";
import Wrapper from "../shared/wrapper";

const Admissions = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    grade: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", form);
    setSubmitted(true);
    setForm({ fullName: "", phone: "", grade: "", note: "" });
  };

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <section className="relative bg-gradient-to-r from-[#E6B822] to-[#fdd835] text-white py-28 rounded-lg shadow-md mb-12 overflow-hidden">
          <img
            src="/img/line1.svg"
            alt="Top Left Illustration"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
          />
          <img
            src="/img/line2.svg"
            alt="Bottom Right Illustration"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
          />
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Qabul
            </h1>
            <p className="text-lg text-black">
              A visual glimpse into the vibrant life of our students — learning,
              growing, and having fun together.
            </p>
          </div>
        </section>

        <section className="space-y-6 text-gray-800 mb-12">
          <div>
            <h2 className="text-xl font-semibold text-[#1c1f52] mb-2">
              📅 Qabul Sanalari
            </h2>
            <p>
              Hujjat topshirish 2025-yil 1-maydan 30-iyungacha davom etadi.
              Imtihonlar iyul oyining boshida bo‘lib o‘tadi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1c1f52] mb-2">
              📋 Qoidalar va Talablar
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>O‘quvchining tug‘ilganlik guvohnomasi nusxasi.</li>
              <li>So‘nggi yillik baholar ko‘rsatkichi (agar mavjud bo‘lsa).</li>
              <li>Ota-onaning pasport nusxasi.</li>
              <li>Onlayn ariza shaklini to‘ldirish shart.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1c1f52] mb-2">
              📝 Bosqichlar
            </h2>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Onlayn ariza topshirish.</li>
              <li>Hujjatlarni tekshirish va tasdiqlash.</li>
              <li>Kiruv imtihonida ishtirok etish.</li>
              <li>Natijalarni e’lon qilish va yakuniy qabul.</li>
            </ol>
          </div>
        </section>

        {/* Online Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-[#1c1f52]">
            🖊 Onlayn Ariza Shakli
          </h2>
          {submitted ? (
            <p className="text-green-600 text-lg">
              ✅ Arizangiz muvaffaqiyatli yuborildi!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">F.I.Sh</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Telefon raqam
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  placeholder="+998 90 123 45 67"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Qaysi sinfga topshirmoqchisiz?
                </label>
                <select
                  value={form.grade}
                  onChange={(e) => setForm({ ...form, grade: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option value="">Sinfni tanlang</option>
                  {[...Array(11)].map((_, i) => (
                    <option key={i + 1} value={`${i + 1}-sinf`}>
                      {i + 1}-sinf
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Qo‘shimcha izoh
                </label>
                <textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  rows={3}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#1c1f52] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#15173d] transition"
              >
                Yuborish
              </button>
            </form>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Admissions;
