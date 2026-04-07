import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-islamic-green py-12 md:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 islamic-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-right text-white"
        >
          <h2 className="text-islamic-gold font-medium text-lg md:text-xl mb-2">أهلاً بكم في الموقع الرسمي لـ</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
            الشيخ عبد الفتاح مصطفى هيكل
          </h1>
          <div className="text-base md:text-xl text-gray-200 max-w-2xl md:ml-auto leading-relaxed mb-6 md:mb-8 flex flex-col gap-2">
            <span>المدرس بالأزهر الشريف.</span>
            <span>الجامع للقراءات العشر الصغرى والكبرى.</span>
            <span>محكم دولي في مسابقات القرآن الكريم والقراءات والأداء الصوتي.</span>
            <span>عضو لجنة مراجعة مصحف الأمة.</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <button 
              onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-islamic-gold text-islamic-green px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-white transition-colors shadow-lg text-sm md:text-base"
            >
              السيرة الذاتية
            </button>
            <button 
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-white hover:text-islamic-green transition-all text-sm md:text-base"
            >
              تواصل معنا
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-56 h-56 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 border-4 border-islamic-gold rounded-full rotate-12 scale-105 opacity-30"></div>
            <div className="absolute inset-0 border-4 border-white rounded-full -rotate-6 scale-105 opacity-20"></div>
            <img 
              src="/WEbsite_pic.jpeg" 
              alt="الشيخ عبد الفتاح هيكل" 
              className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-4 border-white/10 bg-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
