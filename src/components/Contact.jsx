import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Contact() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const contacts = [
    {
      icon: "./logo/icons8-gmail-96.png",
      label: t("contact.email"),
      value: "dinhtien17082003",
      link: "mailto:dinhtien17082003@gmail.com",
    },
    {
      icon: "./logo/icons8-phone-96.png",
      label: t("contact.phone"),
      value: "+84 868 2003 64",
      link: "tel:+84868200364",
    },
    {
      icon: "./logo/icons8-facebook-96.png",
      label: t("contact.facebook"),
      value: "Tiến Nguyễn",
      link: "https://www.facebook.com/tien.candy17",
    },
    {
      icon: "./logo/icons8-linkedin-96.png",
      label: t("contact.linkedin"),
      value: "Tiến Nguyễn Đình",
      link: "https://www.linkedin.com/in/ti%E1%BA%BFn-nguy%E1%BB%85n-%C4%91%C3%ACnh-6b665a3aa/",
    },
    {
      icon: "./logo/icons8-github-96.png",
      label: t("contact.github"),
      value: "TienNguyen003",
      link: "https://github.com/TienNguyen003",
    },
    {
      icon: "./logo/icons8-twitter-bird-96.png",
      label: t("contact.twitter"),
      value: "Your Twitter",
      link: "https://twitter.com/yourprofile",
    },
    {
      icon: "./logo/icons8-instagram-96.png",
      label: t("contact.instagram"),
      value: "Tiến Nguyễn",
      link: "https://www.instagram.com/candyy17033/",
    },
    {
      icon: "./logo/icons8-telegram-96.png",
      label: t("contact.telegram"),
      value: "Nguyễn Tiến",
      link: "https://t.me/TienNoLimit",
    },
  ];

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./logo/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">{t("contact.connect")}</h4>
      <h2 className="text-center text-5xl font-Ovo">{t("contact.title")}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">{t("contact.description")}</p>

      <div className="grid grid-cols-auto gap-8 my-12 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 border border-gray-300 dark:border-white/30 rounded-lg hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={contact.icon} alt={contact.label} className="w-12" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{contact.label}</h3>
              <p className="dark:text-white/70 mt-1 break-all">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
