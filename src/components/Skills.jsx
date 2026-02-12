import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Skills() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const skillsByCategory = {
    frontend: [
      { name: "ReactJs", level: "Professional" },
      { name: "VueJs", level: "Professional" },
      { name: "JavaScript", level: "Professional" },
      { name: "HTML & CSS", level: "Professional" },
    ],
    backend: [
      { name: "Java Spring Boot", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
    ],
    tools: [
      { name: "Git & GitHub", level: "Professional" },
      { name: "Figma", level: "Intermediate" },
      { name: "MySQL", level: "Professional" },
    ],
    softSkills: [
      { name: t("skills.teamwork"), icon: "🤝" },
      { name: t("skills.communication"), icon: "💬" },
      { name: t("skills.problemSolving"), icon: "🧩" },
      { name: t("skills.timeManagement"), icon: "⏰" },
      { name: t("skills.adaptability"), icon: "🔄" },
      { name: t("skills.criticalThinking"), icon: "🧠" },
      //   { name: t("skills.attentionToDetail"), icon: "🔍" },
      { name: t("skills.selfLearning"), icon: "📚" },
    ],
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Professional":
        return "bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white";
      case "Intermediate":
        return "bg-blue-500 text-white";
      case "Familiar":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">{t("skills.abilities")}</h4>
      <h2 className="text-center text-5xl font-Ovo">{t("skills.title")}</h2>

      <div className="max-w-6xl mx-auto my-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Technical Skills - Cột trái (2/3) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">💻</span> {t("skills.frontend")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.frontend.map((skill, index) => (
                <div key={index} className="group relative">
                  <div className="px-5 py-2.5 bg-white dark:bg-darkHover border border-gray-300 dark:border-white/20 rounded-full hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                  </div>
                  {/* <div
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${getLevelColor(skill.level)}`}
                  >
                    {skill.level}
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">⚙️</span> {t("skills.backend")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.backend.map((skill, index) => (
                <div key={index} className="group relative">
                  <div className="px-5 py-2.5 bg-white dark:bg-darkHover border border-gray-300 dark:border-white/20 rounded-full hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                  </div>
                  {/* <div
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${getLevelColor(skill.level)}`}
                  >
                    {skill.level}
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🛠️</span> {t("skills.tools")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.tools.map((skill, index) => (
                <div key={index} className="group relative">
                  <div className="px-5 py-2.5 bg-white dark:bg-darkHover border border-gray-300 dark:border-white/20 rounded-full hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                  </div>
                  {/* <div
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${getLevelColor(skill.level)}`}
                  >
                    {skill.level}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills - Cột phải (1/3) */}
        <div className="lg:col-span-1">
          <div className="lg:top-24">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span> {t("skills.softSkills")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-white dark:bg-darkHover border border-gray-300 dark:border-white/20 rounded-full hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-gray-800 dark:text-white font-medium flex items-center gap-2">
                    <span className="group-hover:scale-110 transition-transform">{skill.icon}</span>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
