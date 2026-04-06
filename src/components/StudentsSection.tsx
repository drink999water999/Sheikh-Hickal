import { motion, AnimatePresence } from "motion/react";
import { UserCheck, ChevronDown, ChevronLeft, GraduationCap } from "lucide-react";
import { useState } from "react";

const studentCategories = [
  { 
    title: "حفظ القرآن كاملاً", 
    students: ["أتم حفظ القرآن الكريم على يد الشيخ ٦٠ طالباً وطالبة"]
  },
  { 
    title: "تصحيح التلاوة", 
    students: ["مجموعة كبيرة من الطلاب في حلقات تصحيح التلاوة"]
  },
  { 
    title: "رواية حفص عن عاصم", 
    students: [
      "إسلام محمد ريشه (بقصر المنفصل)", 
      "محمد أحمد سحيم (بقصر المنفصل)",
      "زياد عمر الجرادي اليمني (من الشاطبية)",
      "محمد أحمد سحيم الجزائري (من الشاطبية، وختمة ثانية لحفص والأصبهاني)",
      "حسين صالح حسين بن حسين اليمني (من الشاطبية)",
      "عبد الرحمن طاوش الجزائري",
      "حمزة خليف الإثيوبي"
    ]
  },
  { 
    title: "قراءة عاصم", 
    students: [
      "علاء مبروك البربري (من الشاطبية)", 
      "أحمد محمد الزلباني (من الشاطبية)", 
      "ناجي السيد (مدرس بالأزهر - من الشاطبية)",
      "د. عبد الله أبو بكر",
      "الشيخ عمر علي الجرادي"
    ]
  },
  { 
    title: "روايات مختلفة", 
    students: [
      "عمر محمد أول (أصحاب التوسط)", 
      "نور إسماعيل أبو بكر (أصحاب التوسط)", 
      "عبد الصمد محمد نظيف (أصحاب التوسط - كلية الفجر - نيجيريا)",
      "لقالون وأبي عمرو ويعقوب: بخاري كبير النيجيري",
      "أصحاب الصلة: إسماعيل أمين النيجيري",
      "الدوري عن أبي عمرو: صباح إبراهيم اليانقي التونسية",
      "خلف عن حمزة: حياة عبد السلام الهلالي التونسية"
    ]
  },
  { 
    title: "القراءات العشر الصغرى", 
    students: [
      "أحمد محمد الزلباني",
      "عبد الله آدم عبدي الصومالي",
      "عبد الله نوح إسحاق",
      "محمد لبرن",
      "إسماعيل محمد خالد",
      "محمد خامس خضر"
    ]
  },
  { 
    title: "القراءات العشر الكبرى", 
    students: [
      "عبد الرحمن ناجح جاد الكريم",
      "عفاف الجمل التونسية (ختمة بتحريرات المتولي، وأخرى لابن عامر من الطيبة)",
      "أحمد محمد الزلباني (بتحريرات المتولي، وختمة ثانية بتحريرات الخليجي)",
      "محمد عبد العاطي (بتحريرات المتولي)",
      "الشيخ محمد عبده المنصري (بتحريرات الإزميري بالفويقات)",
      "الشيخ عبده محمود أبو جبل (بظاهر الطيبة)"
    ]
  },
];

export default function StudentsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="students" className="py-24 bg-islamic-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 islamic-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-gold mb-4">التلاميذ</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            سجل الشرف لطلاب العلم الذين نالوا شرف الإجازة في القرآن الكريم والقراءات على يد الشيخ.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            {studentCategories.map((category, idx) => (
              <div key={idx} className="border-b border-white/10 last:border-0">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-right hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-islamic-gold/20 rounded-xl flex items-center justify-center text-islamic-gold group-hover:bg-islamic-gold group-hover:text-islamic-green transition-colors">
                      <GraduationCap size={20} />
                    </div>
                    <span className="text-xl font-bold text-white">{category.title}</span>
                  </div>
                  {openIndex === idx ? <ChevronDown size={24} className="text-islamic-gold" /> : <ChevronLeft size={24} className="text-white/50" />}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-20 pb-6">
                        <ul className="space-y-3">
                          {category.students.map((student, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-3 text-gray-200">
                              <UserCheck size={18} className="text-islamic-gold shrink-0 mt-1" />
                              <span className="text-lg leading-relaxed">{student}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white/5 rounded-3xl border border-white/10 text-gray-200 max-w-2xl">
            <p className="text-lg italic mb-2">"لا يجيز الشيخ إلا من قرأ ختمة كاملة مع تسميع المتون العلمية المقررة."</p>
            <p className="text-islamic-gold font-bold">كما حفظ عنده القرآن كاملاً (٦٠) طالباً وطالبة.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
