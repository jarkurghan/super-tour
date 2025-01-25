import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import about from "../assets/about.svg";

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <img src={about} alt="logo"></img>
                <div className="p-4 group-hover:bg-sky-50 transition-colors duration-300 max-w-xl">
                    <h3 className="text-3xl font-semibold mb-6 group-hover:text-sky-600 transition-colors duration-300">SUPER TOURga hush kelibsiz</h3>
                    <p className="text-lg text-gray-700">
                        Biz - sayohat va sarguzashtlarni hush koruvchi va bizning dunyoyimizni kashf etishni istovchi guruhmiz! Biz ko'p davlatlarning milliy
                        madaniyatini bilamiz va bizning sayohat bo'yicha yaxshigina tajribamiz bor.Biz sizning sayohatingizni esda qolarlik qilishda o'z
                        tajribamizni sizga ulashish orqali yordam bermoqchimiz.Bizning maqsadimiz - sizni sayohat qilishda ilhomlantirish va sizning
                        sarguzashtlaringiz uchun to'g'ri tanlov qilishingizda yordam berishdir. Biz sizga noyob tajriba yaratish va tashrif buyurgan har bir
                        joyning haqiqiyligini his qilish uchun turli mamlakatlar haqida foydali maslahatlar, fokuslar va ma'lumotlarni taqdim etamiz...
                    </p>
                </div>
            </div>
        </div>
    );
}
