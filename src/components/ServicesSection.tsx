import { motion } from "motion/react";
import { BookCheck, Users, GraduationCap, Star, CheckCircle2, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "برنامج حفظ القرآن وتصحيح التلاوة (لكبار السن)",
    icon: <Users className="text-islamic-gold" size={32} />,
    phases: [
      {
        name: "المرحلة التمهيدية (تصحيح التلاوة)",
        description: "ضبط مخارج الحروف وتصحيح الأخطاء الجلية، مع التركيز على صفات الحروف وأحكام التجويد الأساسية.",
        duration: "1 - 3 أشهر"
      },
      {
        name: "مرحلة التثبيت (إتقان التلاوة)",
        description: "الوصول إلى قراءة صحيحة مستقرة دون أخطاء ظاهرة، مع التدريب على الوقف والابتداء.",
        duration: "1 - 2 شهر"
      },
      {
        name: "مرحلة الحفظ (الخطة الأساسية)",
        description: "منهجية 'القليل المستمر' لضمان الحفظ الراسخ، مع نظام مراجعة يومي وأسبوعي دقيق.",
        duration: "مستمر"
      }
    ]
  },
  {
    title: "المنهج المتدرج لطلاب علم القراءات",
    icon: <GraduationCap className="text-islamic-gold" size={32} />,
    phases: [
      {
        name: "مرحلة التأسيس",
        description: "إتقان القراءة مع دراسة متن تحفة الأطفال ومتن مبسط في مخارج الحروف.",
        duration: "المستوى الأول"
      },
      {
        name: "الإتقان والتجويد المتقدم",
        description: "دراسة متن الجزرية وكتب الوقف والابتداء للوصول لدرجة الإتقان العالية.",
        duration: "المستوى الثاني"
      },
      {
        name: "مدخل علم القراءات",
        description: "فهم أركان العلم والتعرف على الأئمة السبعة ورواتهم وأسانيدهم.",
        duration: "المستوى الثالث"
      },
      {
        name: "التخصص في القراءات (الصغرى والكبرى)",
        description: "دراسة الشاطبية والدرة (العشر الصغرى) ثم طيبة النشر (العشر الكبرى) وصولاً للإجازة والإقراء.",
        duration: "المستويات المتقدمة"
      }
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">خدماتنا ومنهجنا العلمي</h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            نقدم منهجية شاملة ومتدرجة لحفظ كتاب الله وإتقان علوم القراءات، تجمع بين الضبط النظري والإتقان العملي.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs.map((program, pIdx) => (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, x: pIdx === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-islamic-cream p-8 md:p-10 rounded-[2rem] shadow-sm border border-islamic-gold/10 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-islamic-green leading-tight">
                  {program.title}
                </h3>
              </div>

              <div className="space-y-8 flex-1">
                {program.phases.map((phase, phIdx) => (
                  <div key={phIdx} className="relative pr-8 border-r-2 border-islamic-gold/20 pb-2">
                    <div className="absolute top-0 right-[-9px] w-4 h-4 bg-white border-2 border-islamic-gold rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-islamic-gold rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800 text-lg">{phase.name}</h4>
                      <span className="text-xs font-bold bg-islamic-gold/10 text-islamic-green px-3 py-1 rounded-full border border-islamic-gold/20">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-islamic-gold/10 flex items-center gap-2 text-islamic-green font-bold">
                <Star size={18} className="text-islamic-gold" />
                <span>منهجية معتمدة قائمة على التلقي والمشافهة</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-islamic-green text-white p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 islamic-pattern pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <CheckCircle2 size={40} className="text-islamic-gold mx-auto" />
              <h4 className="text-xl font-bold">ضبط المخارج</h4>
              <p className="text-gray-300 text-sm">التركيز على النطق الصحيح خاصة الضاد والظاء والقاف</p>
            </div>
            <div className="space-y-3">
              <BookCheck size={40} className="text-islamic-gold mx-auto" />
              <h4 className="text-xl font-bold">حفظ المتون</h4>
              <p className="text-gray-300 text-sm">دراسة التحفة والجزرية والشاطبية والدرة والطيبة</p>
            </div>
            <div className="space-y-3">
              <Users size={40} className="text-islamic-gold mx-auto" />
              <h4 className="text-xl font-bold">الإجازة بالسند</h4>
              <p className="text-gray-300 text-sm">منح الإجازات العلمية المتصلة بالسند لرسول الله ﷺ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
