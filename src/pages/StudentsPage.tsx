import { motion } from "motion/react";
import { UserCheck, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const students = [
  { name: "عبد الرحمن ناجح جاد الكريم", achievement: "القراءات العشر الكبرى" },
  { name: "عفاف الجمل التونسية", achievement: "ختمة بتحريرات المتولي" },
  { name: "أحمد محمد الزلباني", achievement: "بتحريرات المتولي وختمة ثانية" },
  { name: "محمد عبد العاطي", achievement: "بتحريرات المتولي" },
  { name: "الشيخ محمد عبده المنصري", achievement: "بتحريرات الإزميري بالفويقات" },
  { name: "الشيخ عبده محمود جبل", achievement: "بظاهر الطيبة" },
  { name: "محمود محمد ديري", achievement: "شيخ قراء حلب - القراءات العشر الصغرى" },
  { name: "سعيد يحيى عبد المعطي رزق", achievement: "القراءات العشر الصغرى" },
  { name: "خالد عبد السلام بركات الدمشقي", achievement: "القراءات العشر الصغرى" },
  { name: "يسري سعد", achievement: "القراءات العشر الصغرى" },
  { name: "أحمد جبصيني", achievement: "القراءات العشر الصغرى" },
  { name: "خميس عيص", achievement: "القراءات العشر الصغرى" },
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-islamic-cream pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-islamic-green hover:text-islamic-gold transition-colors mb-8 font-bold"
        >
          <ArrowRight size={20} />
          العودة للرئيسية
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-islamic-green mb-4">التلاميذ والمجازون</h1>
          <div className="w-32 h-1.5 bg-islamic-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            سجل الشرف لطلاب العلم الذين نالوا شرف الإجازة في القرآن الكريم والقراءات على يد الشيخ عبد الفتاح هيكل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-islamic-gold/10 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-islamic-cream rounded-2xl flex items-center justify-center text-islamic-gold group-hover:bg-islamic-green group-hover:text-white transition-colors">
                  <UserCheck size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {student.name}
                  </h4>
                  <p className="text-sm text-islamic-green font-medium">طالب مجاز</p>
                </div>
              </div>
              <div className="relative bg-islamic-cream/50 p-4 rounded-2xl">
                <Quote size={24} className="text-islamic-gold/20 absolute -top-2 -right-2" />
                <p className="text-gray-700 leading-relaxed pr-4">
                  أتم ختمة القرآن الكريم بـ <span className="font-bold text-islamic-green">{student.achievement}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-islamic-green text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 islamic-pattern pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-islamic-gold mb-6">إحصائيات ومنهج الإجازة</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-bold text-islamic-gold mb-2">٦٠</div>
                  <div className="text-gray-300">طالباً وطالبة حفظوا القرآن كاملاً</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-bold text-islamic-gold mb-2">١٠٠٪</div>
                  <div className="text-gray-300">تسميع المتون شرط أساسي للإجازة</div>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed italic">
                "لا يجيز الشيخ إلا من قرأ ختمة كاملة مع تسميع المتون العلمية المقررة، لضمان الضبط والإتقان في نقل كتاب الله عز وجل."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
