import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, Briefcase, MapPin, Calendar, User, ChevronDown, ChevronLeft } from "lucide-react";
import { useState } from "react";

const info = [
  { icon: <Calendar size={20} />, label: "تاريخ الميلاد", value: "23 نوفمبر 1987م" },
  { icon: <MapPin size={20} />, label: "محل الإقامة", value: "مدينة نصر الحي الثامن" },
  { icon: <GraduationCap size={20} />, label: "المؤهل", value: "ليسانس الدراسات الإسلامية والعربية - جامعة الأزهر 2009م" },
];

const experience = [
  { title: "مدرس بالأزهر الشريف", period: "حتى تاريخه" },
  { title: "مدرس بالمملكة العربية السعودية", period: "2016م - 2020م" },
  { title: "عضو مقرأة بوزارة الأوقاف", period: "2005م - 2016م" },
  { title: "عضو لجنة مراجعة مصحف الأمة", period: "مراجعة وتدقيق" },
  { title: "محكم دولي في مسابقات القرآن", period: "" },
];

const ijazat = [
  { 
    title: "قراءة حفص عن عاصم", 
    teachers: ["الشيخ زكريا محمد عبد العاطي", "الشيخ أحمد جبصيني", "الشيخ محمد إبراهيم البدوي (أتمه تلميذه الشيخ عبده محمود جبل)"]
  },
  { 
    title: "قراءة عاصم", 
    teachers: ["الدكتور صفوت سالم (رحمه الله)", "الشيخ صلاح الدين فخري (رحمه الله)", "الشيخ عبده محمود جبل", "الشيخ خميس عيص", "الشيخ محمد وائل الحنبلي"]
  },
  { 
    title: "القراءات العشر الصغرى", 
    teachers: [
      "الشيخ محمود محمد ديري (شيخ قراء حلب)", 
      "الشيخ سعيد يحيى عبد المعطي رزق", 
      "الشيخ خالد عبد السلام بركات الدمشقي", 
      "الشيخ يسري سعد", 
      "الشيخ أحمد جبصيني", 
      "الشيخ خميس عيص", 
      "الشيخ محمد إدريس العاصم", 
      "الشيخ عبد التواب علي روضان (رحمه الله)"
    ]
  },
  { 
    title: "القراءات السبع", 
    teachers: ["الشيخ محمود عبد الفتاح أبو قلوب", "الشيخ محمد يونس الغلبان"]
  },
  { 
    title: "القراءات العشر الكبرى", 
    teachers: [
      "الشيخ حامد الجمسي", 
      "الدكتور أحمد عيسى المعصراوي", 
      "الشيخ أحمد حامد آل طعيمة", 
      "الدكتور محمد سكري", 
      "الشيخ حافظ عثمان شاهين", 
      "الشيخ محمود أبو قلوب", 
      "الشيخ رمضان نبيه", 
      "الدكتور خالد عبد السلام بركات", 
      "الشيخ عبد الباسط حسان مازن"
    ]
  },
];

export default function CVSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="cv" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-islamic-cream rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">السيرة الذاتية</h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Basic Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-islamic-cream p-8 rounded-2xl shadow-sm border border-islamic-gold/10"
          >
            <h3 className="text-xl font-bold text-islamic-green mb-6 flex items-center gap-2">
              <User size={24} className="text-islamic-gold" />
              المعلومات الشخصية
            </h3>
            <div className="space-y-6">
              {info.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 text-islamic-gold">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="font-medium text-gray-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-islamic-green mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-islamic-gold" />
              الخبرات والوظائف
            </h3>
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div key={idx} className="relative pr-6 border-r-2 border-islamic-gold/30 pb-4 last:pb-0">
                  <div className="absolute top-0 right-[-5px] w-2 h-2 bg-islamic-gold rounded-full"></div>
                  <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                  {item.period && <p className="text-sm text-gray-500">{item.period}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ijazat Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-islamic-green p-8 rounded-2xl shadow-lg text-white"
          >
            <h3 className="text-xl font-bold text-islamic-gold mb-6 flex items-center gap-2">
              <Award size={24} />
              الإجازات العلمية
            </h3>
            <div className="space-y-3">
              {ijazat.map((item, idx) => (
                <div key={idx} className="border-b border-white/10 last:border-0 pb-2">
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-2 text-right hover:text-islamic-gold transition-colors group"
                  >
                    <span className="font-medium">{item.title}</span>
                    {openIndex === idx ? <ChevronDown size={18} /> : <ChevronLeft size={18} />}
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="pr-4 py-2 space-y-1">
                          {item.teachers.map((teacher, tIdx) => (
                            <li key={tIdx} className="text-sm text-gray-300 flex items-center gap-2">
                              <div className="w-1 h-1 bg-islamic-gold rounded-full"></div>
                              {teacher}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
