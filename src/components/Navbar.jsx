import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/logo.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isLangOpen, setIsLangOpen] = React.useState(false);
    const { language, setLanguage, t } = useLanguage();
    const langMenuRef = React.useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const languages = [
        { code: "en", label: "EN" },
        { code: "uz", label: "UZ" },
        { code: "ru", label: "RU" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                if (window.innerWidth >= 768) setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getCurrentLanguage = () => {
        return languages.find((lang) => lang.code === language)?.label || "EN";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-semibold text-gray-900 focus:outline-none">
                        <img src={logo} width="165" height="60" alt="logo"></img>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link to="/tours" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                            {t("nav.tours")}
                        </Link>
                        <Link to="/discounts" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                            {t("nav.discounts")}
                        </Link>
                        <Link to="/blog" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                            {t("nav.blog")}
                        </Link>
                        <Link to="/cooperation" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                            {t("nav.cooperation")}
                        </Link>
                        <Link to="/contact" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                            {t("nav.contact")}
                        </Link>

                        {/* Language Dropdown */}
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-1 text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors ml-10"
                            >
                                <span>{getCurrentLanguage()}</span>
                                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 py-0.5 w-14 bg-white rounded-lg shadow-sm ring-1 ring-black ring-opacity-5">
                                    {languages.map(({ code, label }) => (
                                        <button
                                            key={code}
                                            onClick={() => {
                                                setLanguage(code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`block w-full text-center px-1 py-1 text-sm ${
                                                language === code
                                                    ? "bg-gray-50 text-gray-900 font-medium"
                                                    : "text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                                            }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            <Link to="/tours" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors" onClick={toggleMenu}>
                                {t("nav.tours")}
                            </Link>
                            <Link to="/discounts" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors" onClick={toggleMenu}>
                                {t("nav.discounts")}
                            </Link>
                            <Link to="/blog" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors" onClick={toggleMenu}>
                                {t("nav.blog")}
                            </Link>
                            <Link to="/cooperation" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors" onClick={toggleMenu}>
                                {t("nav.cooperation")}
                            </Link>
                            <Link to="/contact" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors" onClick={toggleMenu}>
                                {t("nav.contact")}
                            </Link>

                            {/* Mobile Language Menu */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsLangOpen(!isLangOpen)}
                                    className="flex items-center justify-between space-x-1 text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors w-full"
                                >
                                    {getCurrentLanguage()}
                                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
                                </button>

                                {isLangOpen && (
                                    <div className="mt-2 py-0.5 bg-white rounded-lg shadow-sm ring-1 ring-black ring-opacity-5 flex">
                                        {languages.map(({ code, label }) => (
                                            <button
                                                key={code}
                                                onClick={() => {
                                                    setLanguage(code);
                                                    setIsLangOpen(false);
                                                    toggleMenu();
                                                }}
                                                className={`block w-full text-center px-1 py-1 text-sm ${
                                                    language === code
                                                        ? "bg-gray-50 text-gray-900 font-medium"
                                                        : "text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                                                }`}
                                            >
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
