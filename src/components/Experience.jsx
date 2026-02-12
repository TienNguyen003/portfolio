import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Experience() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const experiences = [
    {
      year: "05/2024 - Present",
      title: t("experience.position"),
      company: t("experience.company"),
      description: t("experience.companyDesc"),
    },
  ];

  const education = [
    {
      year: "2021 - 2025",
      title: t("experience.degree"),
      school: t("experience.school"),
      description: t("experience.schoolDesc"),
    },
  ];

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="journey">
      <h4 className="text-center mb-2 text-lg font-Ovo">{t("experience.journey")}</h4>
      <h2 className="text-center text-5xl font-Ovo">{t("experience.title")}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-12">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-Ovo mb-8 text-gray-700 dark:text-white">{t("experience.workExperience")}</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-gray-300 dark:border-white/30 pl-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</p>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-white mt-1">{exp.title}</h4>
                <p className="text-sm text-gray-600 dark:text-white/70">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-white/70 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-Ovo mb-8 text-gray-700 dark:text-white">{t("experience.education")}</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-gray-300 dark:border-white/30 pl-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-white mt-1">{edu.title}</h4>
                <p className="text-sm text-gray-600 dark:text-white/70">{edu.school}</p>
                <p className="text-sm text-gray-600 dark:text-white/70 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
