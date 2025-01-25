import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="space-y-4">
                        <Link to="/" className="text-xl font-semibold text-gray-900">
                            SUPERTOUR.UZ
                        </Link>
                        <p className="text-gray-600 text-sm">{t("footer.companyDescription")}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">{t("footer.contactUs")}</h3>
                        <div className="flex flex-col space-y-2 text-gray-600 text-sm">
                            <a href="tel:+99899 810-70-90" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                                <i class="bx bx-phone"></i> +998 99 810 70 90
                            </a>
                            <a href="tel:+99899 814-70-90" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                                <i class="bx bx-phone"></i> +998 99 814 70 90
                            </a>
                            <a href="mail:tireuzb@mail.ru" className="text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">
                                info@super-tour.uz
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Manzil</h3>
                        <div className="flex flex-col space-y-1 text-gray-600 text-sm">
                            <p className="leading-relaxed">O'zbekiston, Toshkent</p>
                            <p className="leading-relaxed">Amir Temur ko'chasi 10, ofis 210</p>
                        </div>
                    </div>
                </div>

                <div className="sm:mt-8 sm:pt-4 sm:border-t sm:border-gray-200">
                    <p className="text-center text-gray-600 text-sm">© 2018-{new Date().getFullYear()} SUPERSITE.UZ</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
