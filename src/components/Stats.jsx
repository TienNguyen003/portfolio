import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Stats() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const stats = [
    {
      number: "2+",
      label: t("stats.yearsExp"),
      icon: "./assets/star-icon.png",
    },
    {
      number: "3+",
      label: t("stats.projectsCompleted"),
      icon: "./assets/project-icon.png",
    },
    {
      number: "10+",
      label: t("stats.happyClients"),
      icon: "./assets/smile-icon.png",
    },
    {
      number: "100%",
      label: t("stats.satisfactionRate"),
      icon: "./assets/check-icon.png",
    },
  ];

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="group relative">
            {/* Background with border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#b820e6] to-[#da7d20] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

            {/* Main Card */}
            <div className="relative bg-white dark:bg-darkTheme rounded-xl p-6 border border-gray-200 dark:border-white/10 group-hover:border-transparent transition-all duration-300">
              <div className="flex items-center gap-4">
                {/* Icon */}
                {/* <div className="flex-shrink-0">
                  <img
                    src={stat.icon}
                    alt=""
                    className="w-10 h-10 opacity-70 dark:invert group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div> */}

                {/* Content */}
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.number}</div>
                  <p className="text-xs text-gray-600 dark:text-white/60 font-Ovo leading-tight">{stat.label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
