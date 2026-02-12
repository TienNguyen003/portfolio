import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Work() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const work = [
    {
      name: t("work.hrm"),
      icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
      description: t("work.hrmDesc"),
      link: "https://github.com/TienNguyen003/HRM",
    },
    {
      name: t("work.film"),
      icon: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=500&fit=crop",
      description: t("work.filmDesc"),
      link: "https://github.com/TienNguyen003/Film",
    },
    {
      name: t("work.livestream"),
      icon: "https://i.pinimg.com/736x/e2/f8/02/e2f802a71ce7cc64667464234c959cc4.jpg",
      description: t("work.livestreamDesc"),
      link: "https://github.com/TienNguyen003/ChatApp_BE",
    },
    {
      name: t("work.restaurant"),
      icon: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop",
      description: t("work.restaurantDesc"),
      link: "https://github.com/TienNguyen003/Restaurant_BE",
    },
  ];
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">{t("work.portfolio")}</h4>
      <h2 className="text-center text-5xl font-Ovo">{t("work.title")}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">{t("work.description")}</p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((work) => (
          <div
            key={work.name}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${work.icon})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <h2 className="font-semibold">{work.name}</h2>
                  <p className="text-sm text-gray-700">{work.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <img src="./assets/send-icon.png" alt="" className="w-5" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/TienNguyen003"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
      >
        Show more
        <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
        <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
      </a>
    </div>
  );
}
