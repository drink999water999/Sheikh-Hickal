import { motion } from "motion/react";

export default function RecitationsSection() {
  return (
    <section id="recitations" className="py-24 bg-islamic-cream relative">
      <div className="container mx-auto px-4">
        {/* Event Photos */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/event_pic1.jpeg" 
                  alt="حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات" 
                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base leading-relaxed">حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/event_pic2.jpeg" 
                  alt="حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات" 
                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base leading-relaxed">حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/event_pic3.jpeg" 
                  alt="مع رئيس الشؤون الدينية والأوقاف في تركيا" 
                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base leading-relaxed">مع رئيس الشؤون الدينية والأوقاف في تركيا</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/event_pic4.jpeg" 
                  alt="مع الشيخ المعصراوي شيخ عموم المقارئ المصرية سابقا" 
                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base leading-relaxed">مع الشيخ المعصراوي شيخ عموم المقارئ المصرية سابقا</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ijazat Photos */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">بعض الإجازات</h3>
            <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
            {['ejazza1', 'ejazza2', 'ejazza3', 'ejazza4'].map((img) => (
              <motion.div 
                key={img}
                whileHover={{ y: -10 }}
                className="group rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={`/${img}.jpeg`} 
                    alt="" 
                    className="w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ejazza5 - wider and middle */}
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 w-full lg:w-4/5"
            >
              <div className="aspect-[1920/913] overflow-hidden">
                <img 
                  src="/ejazza5.png" 
                  alt="" 
                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
