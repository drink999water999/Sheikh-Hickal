import { motion } from "motion/react";
import { Play, Mic2, Volume2 } from "lucide-react";

const recitations = [
  { title: "تلاوة من سورة الأنعام", description: "برواية حفص عن عاصم", duration: "05:20" },
  { title: "تلاوة من سورة الذاريات", description: "بالقراءات العشر الصغرى", duration: "08:45" },
  { title: "تلاوة من سورة النساء", description: "بالقراءات العشر الكبرى", duration: "12:10" },
];

export default function RecitationsSection() {
  return (
    <section id="recitations" className="py-24 bg-islamic-cream relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">القراءات والتلاوات</h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            نماذج من تلاوات الشيخ بمختلف الروايات والقراءات التي أجيز فيها.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recitations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-islamic-cream rounded-full flex items-center justify-center text-islamic-green group-hover:bg-islamic-green group-hover:text-white transition-colors">
                  <Mic2 size={24} />
                </div>
                <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                  <Volume2 size={14} />
                  {item.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-6">{item.description}</p>
              
              <button className="w-full py-3 bg-islamic-cream text-islamic-green rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-islamic-gold hover:text-islamic-green transition-all">
                <Play size={18} fill="currentColor" />
                استماع للتلاوة
              </button>
            </motion.div>
          ))}
        </div>

        {/* Event Photos */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-islamic-green text-center mb-10">صور من الفعاليات والمسابقات</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 bg-white"
            >
              <img 
                src="/event_pic1.jpeg" 
                alt="الشيخ في فعالية دولية" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 bg-white"
            >
              <img 
                src="/event_pic2.jpeg" 
                alt="الشيخ في مسابقة دولية" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
