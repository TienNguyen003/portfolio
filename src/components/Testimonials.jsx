import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Manager at Tech Company",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      feedback:
        language === "en"
          ? "Tiến is an excellent developer who delivered high-quality work on time. His attention to detail and problem-solving skills are outstanding."
          : "Tiến là một nhà phát triển xuất sắc đã cung cấp công việc chất lượng cao đúng thời hạn. Sự chú ý đến chi tiết và kỹ năng giải quyết vấn đề của anh ấy rất tuyệt vời.",
    },
    {
      name: "Trần Thị B",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      feedback:
        language === "en"
          ? "Working with Tiến was a great experience. He understood our requirements perfectly and delivered a beautiful, functional website."
          : "Làm việc với Tiến là một trải nghiệm tuyệt vời. Anh ấy hiểu được yêu cầu của chúng tôi một cách hoàn hảo và đã cung cấp một trang web đẹp và chức năng.",
    },
    {
      name: "Lê Văn C",
      role: "CTO at Web Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      feedback:
        language === "en"
          ? "Tiến's technical expertise and communication skills made the project smooth. Highly recommended for any frontend development needs!"
          : "Chuyên môn kỹ thuật và kỹ năng giao tiếp của Tiến đã làm cho dự án suôn sẻ. Rất khuyến nghị cho bất kỳ nhu cầu phát triển frontend nào!",
    },
  ];

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">{t("testimonials.feedback")}</h4>
      <h2 className="text-center text-5xl font-Ovo">{t("testimonials.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-white/30 rounded-lg p-8 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-white/70">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600 dark:text-white/80 leading-6 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
