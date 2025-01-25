import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import about from "../assets/about.svg";

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <img src={about} alt="logo"></img>
                <div className="sm:p-4 group-hover:bg-sky-50 transition-colors duration-300 max-w-xl">
                    <h3 className="text-3xl font-semibold mb-6 group-hover:text-sky-600 transition-colors duration-300 uppercase">{t("about.welcome")}</h3>
                    <p className="text-lg text-gray-700 my-2">{t("about.text1")}</p>
                    <p className="text-lg text-gray-700">{t("about.text2")}</p>
                </div>
            </div>
        </div>
    );
}
