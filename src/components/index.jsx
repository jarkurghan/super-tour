import { useLanguage } from "../i18n/LanguageContext";
import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Request from "./Request";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="w-full">
            <div className="relative w-full h-[265px] bg-cover bg-center mt-16" style={{ background: "linear-gradient(to bottom, #5494dc, #83c6f0)" }}>
                <div className="relative z-10 h-full flex flex-col items-center max-w-[1920px] mx-auto px-4">
                    <div className="flex-1 flex flex-col items-center">
                        <div className="text-center mb-8 md:mb-12 mt-16">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">{t("hero.title")}</h1>
                            <p className="text-lg md:text-2xl text-white drop-shadow-lg">{t("hero.subtitle")}</p>
                        </div>
                    </div>
                    <a href="#request">
                        <button className="px-6 py-3.5 text-base uppercase font-medium text-white inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                            <svg className="w-4 h-4 text-white me-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                            {t("request.button")}
                        </button>
                    </a>
                </div>
            </div>

            <div className="max-w-[1920px] mx-auto px-4">
                <div id="banners-section" className="pt-24 md:pt-28">
                    <Banner />
                </div>
                <div id="about-section" className="pt-24 md:pt-28">
                    <About />
                </div>
            </div>

            <div className="w-full h-[calc(100vh_-_64px)] grid grid-rows-[1fr_auto]">
                <Request />
                <Footer />
            </div>
        </div>
    );
};

export default Hero;
