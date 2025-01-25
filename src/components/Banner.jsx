import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import image3 from "../assets/image-3.jpg";
import image2 from "../assets/image-2.jpg";
import image1 from "../assets/image-1.jpg";

export default function Banner() {
    const { t } = useLanguage();

    const cities = [
        { image: image1, alt: "Air", titleKey: "cities.air.title", descriptionKey: "cities.air.description" },
        { image: image2, alt: "Hotels", titleKey: "cities.hotels.title", descriptionKey: "cities.hotels.description" },
        { image: image3, alt: "History", titleKey: "cities.history.title", descriptionKey: "cities.history.description" },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {cities.map((city, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm group cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                    <img src={city.image} alt={city.alt} className="w-full h-60 object-cover" />
                    <div className="p-4 group-hover:bg-sky-50 transition-colors duration-300">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-600 transition-colors duration-300">{t(city.titleKey)}</h3>
                        <p className="text-md text-gray-600 line-clamp-4">{t(city.descriptionKey)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
