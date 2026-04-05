import { motion } from "motion/react";

export default function RecitationsSection() {
  return (
    <section id="recitations" className="py-24 bg-islamic-cream relative">
      <div className="container mx-auto px-4">
        {/* Event Photos */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src="/event_pic1.jpeg" 
                  alt="حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base">حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src="/event_pic2.jpeg" 
                  alt="حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base">حفل ختام جائزة الشيخ علي الصوفي الدولية للقراءات</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src="/event_pic3.jpeg" 
                  alt="مع رئيس الشؤون الدينية والأوقاف في تركيا" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base">مع رئيس الشؤون الدينية والأوقاف في تركيا</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src="/event_pic4.jpeg" 
                  alt="مع الشيخ المعصراوي شيخ عموم المقارئ المصرية سابقا" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white text-center border-t border-gray-50">
                <p className="font-bold text-islamic-green text-sm md:text-base">مع الشيخ المعصراوي شيخ عموم المقارئ المصرية سابقا</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
