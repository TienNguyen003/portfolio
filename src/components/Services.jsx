import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Services() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const services = [
    {
      name: t("services.backend"),
      icon: "./assets/web-icon.png",
      description: t("services.backendDesc"),
      link: "#",
    },
    {
      name: t("services.frontend"),
      icon: "./assets/web-icon.png",
      description: t("services.frontendDesc"),
      link: "#",
    },
    {
      name: t("services.uiux"),
      icon: "./assets/ui-icon.png",
      description: t("services.uiuxDesc"),
      link: "#",
    },
    {
      name: t("services.graphics"),
      icon: "./assets/graphics-icon.png",
      description: t("services.graphicsDesc"),
      link: "#",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">{t("services.offer")}</h4>
      <h2 className="text-center text-5xl font-Ovo">{t("services.title")}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">{t("services.description")}</p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={service.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
            <a href={service.link} className="flex items-center gap-2 text-sm mt-5">
              {t("services.readMore")} <img src="./assets/right-arrow.png" alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
