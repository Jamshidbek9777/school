import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";

const Admissions = () => {
  const { t } = useTranslation();
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
        <section
          className="relative bg-cover bg-center py-36 rounded-lg shadow-md mb-16 overflow-hidden"
          style={{ backgroundImage: "url('/img/header2.JPG')" }}
          loading="lazy"
        >
          <img
            src="/img/line1.svg"
            alt="Top Left Illustration"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
            loading="lazy"
          />
          <img
            src="/img/line2.svg"
            alt="Bottom Right Illustration"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
            loading="lazy"
          />

          <div className="relative z-10 flex justify-center">
            <div className="backdrop-blur-md bg-white/30 px-10 py-8 rounded-xl max-w-3xl text-center shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                {t("nav2")}
              </h1>
              <p className="text-lg text-gray-800">{t("adm1")}</p>
            </div>
          </div>
        </section>

        <section className="space-y-10 text-gray-800 mb-20">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-[#1c1f52] mb-3">
              📅 {t("adm2")}
            </h2>
            <p>
              <span className="font-semibold">1-may – 30-iyun 2025:</span>{" "}
              hujjatlar topshirish muddati. <br />
              <span className="font-semibold">Iyul oyi:</span> kirish
              imtihonlari o‘tkaziladi.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-[#1c1f52] mb-3">
              📋 {t("adm3")}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>O‘quvchining tug‘ilganlik guvohnomasi nusxasi</li>
              <li>So‘nggi yillik baholar (agar mavjud bo‘lsa)</li>
              <li>Ota-onaning pasport nusxasi</li>
              <li>Onlayn ariza shaklini to‘ldirish</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-[#1c1f52] mb-3">
              📝 {t("adm4")}
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Onlayn ariza topshirish</li>
              <li>Hujjatlarni tekshirish va tasdiqlash</li>
              <li>Kiruv imtihonida ishtirok etish</li>
              <li>Natijalarni e’lon qilish va yakuniy qabul</li>
            </ol>
          </div>
        </section>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-[#1c1f52] text-center">
            🖊 {t("adm5")}
          </h2>

          {submitted ? (
            <p className="text-green-600 text-lg text-center">
              ✅ Arizangiz muvaffaqiyatli yuborildi!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1">{t("adm6")}</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c1f52]/50"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">{t("adm7")}</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  placeholder="+998 90 123 45 67"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c1f52]/50"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">{t("adm7")}</label>
                <select
                  value={form.grade}
                  onChange={(e) => setForm({ ...form, grade: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c1f52]/50"
                >
                  <option value="">{t("adm8")}</option>
                  {[...Array(11)].map((_, i) => (
                    <option key={i + 1} value={`${i + 1}-sinf`}>
                      {i + 1}-{t("adm9")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">{t("adm10")}</label>
                <textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c1f52]/50"
                  rows={3}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#1c1f52] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#15173d] transition"
                >
                  {t("adm11")}
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="mt-10 border-t pt-8">
          <h3 className="text-xl font-bold text-[#050a41] mb-4">
            📞 {t("adm12")}
          </h3>
          <p className="text-gray-800 mb-2">
            {t("adm7")}:{" "}
            <a href="tel:+99877 454 00 50" className="text-blue-600">
              +998 77 454 00 50
            </a>
          </p>
          <p className="text-gray-800 mb-4">
            Email:{" "}
            <a
              href="mailto:deutschsmartschool@gmail.com"
              className="text-blue-600"
            >
              deutschsmartschool@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-20 bg-white shadow-lg rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#050a41] mb-3">
            📍 {t("adm13")}
          </h3>
          {/* <p className="text-gray-700 mb-6">
            aa, Mustaqillik ko‘chasi 45, Tashkent, Uzbekistan
          </p> */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2997.6565364313738!2d69.326168!3d41.294579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzQwLjUiTiA2OcKwMTknMzQuMiJF!5e0!3m2!1sen!2s!4v1745252920306!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy=""
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Admissions;
