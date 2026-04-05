import { motion } from "motion/react";
import { Quote, UserCheck } from "lucide-react";

const students = [
  { name: "عبد الرحمن ناجح جاد الكريم", achievement: "القراءات العشر الكبرى" },
  { name: "عفاف الجمل التونسية", achievement: "ختمة بتحريرات المتولي" },
  { name: "أحمد محمد الزلباني", achievement: "بتحريرات المتولي وختمة ثانية" },
  { name: "محمد عبد العاطي", achievement: "بتحريرات المتولي" },
  { name: "الشيخ محمد عبده المنصري", achievement: "بتحريرات الإزميري بالفويقات" },
  { name: "الشيخ عبده محمود جبل", achievement: "بظاهر الطيبة" },
];

export default function StudentsSection() {
  return (
    <section id="students" className="py-24 bg-islamic-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 islamic-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-gold mb-4">التلاميذ والمجازون</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            نخبة من طلاب العلم الذين أتموا ختماتهم ونالوا الإجازات على يد الشيخ في مختلف القراءات.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-islamic-gold/20 rounded-full flex items-center justify-center text-islamic-gold">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-islamic-gold transition-colors">
                    {student.name}
                  </h4>
                  <p className="text-xs text-gray-300">طالب مجاز</p>
                </div>
              </div>
              <div className="relative">
                <Quote size={20} className="text-islamic-gold/30 absolute -top-2 -right-2" />
                <p className="text-gray-200 text-sm italic pr-4">
                  أتم ختمة القرآن الكريم بـ {student.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-300 text-sm">
            تنبيه: لا يجيز الشيخ إلا من قرأ ختمة كاملة مع تسميع المتون، كما حفظ عنده القرآن كاملاً (٦٠) طالباً وطالبة.
          </div>
        </div>
      </div>
    </section>
  );
}
