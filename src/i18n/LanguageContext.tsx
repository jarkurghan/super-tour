import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

type Language = "en" | "uz" | "ru";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && ["en", "uz", "ru"].includes(savedLanguage)) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleLanguageChange = (newLanguage: Language) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    const t = (key: string): string => {
        const translation = translations[key];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translation[language] || translation.en; // Fallback to English if translation is missing
    };

    return <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
