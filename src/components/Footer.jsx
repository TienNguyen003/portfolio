import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Footer() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: t('nav.home'), href: "#" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.work'), href: "#work" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  const socialLinks = [
    { icon: "G", href: "https://github.com/TienNguyen003", label: "GitHub" },
    { icon: "L", href: "https://www.linkedin.com/in/ti%E1%BA%BFn-nguy%E1%BB%85n-%C4%91%C3%ACnh-6b665a3aa/", label: "LinkedIn" },
    { icon: "T", href: "https://twitter.com/yourprofile", label: "Twitter" },
    { icon: "I", href: "https://instagram.com/candyy17033", label: "Instagram" },
    { icon: "Te", href: "https://t.me/TienNoLimit", label: "Telegram" },
  ];

  return (
    <footer className="w-full scroll-mt-20 bg-[url('./logo/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-darkTheme relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="w-full px-[12%] pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#b820e6] to-[#da7d20] bg-clip-text text-transparent">
              Tien.
            </h3>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              {t('footer.brand')}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-white/70">
              <span>📍</span>
              <span>{t('footer.location')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-800 dark:text-white font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-gray-800 dark:text-white font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition duration-300 text-sm"
                >
                  {t('services.frontend')}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition duration-300 text-sm"
                >
                  {t('services.backend')}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition duration-300 text-sm"
                >
                  {t('services.uiux')}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition duration-300 text-sm"
                >
                  {t('footer.fullStack')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-gray-800 dark:text-white font-semibold mb-4">{t('footer.getInTouch')}</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:dinhtien17082003@gmail.com"
                className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition duration-300 text-sm flex items-center gap-2"
              >
                <span>✉️</span>
                dinhtien17082003@gmail.com
              </a>
              <div className="flex gap-3 mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gradient-to-r hover:from-[#b820e6] hover:to-[#da7d20] flex items-center justify-center transition duration-300 text-xs font-bold group text-gray-700 dark:text-white/80 hover:text-white"
                    title={social.label}
                  >
                    <span className="group-hover:scale-110 transition">{social.icon[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 dark:text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tiến. {t('footer.copyright')}
          </p>

          <button
            onClick={scrollToTop}
            className="px-6 py-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gradient-to-r hover:from-[#b820e6] hover:to-[#da7d20] text-gray-800 dark:text-white text-sm transition duration-300 flex items-center gap-2 hover:text-white"
          >
            ↑ {t('footer.backToTop')}
          </button>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 dark:bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 dark:bg-orange-500 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}
