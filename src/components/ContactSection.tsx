import { motion } from "motion/react";
import { Send, Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { FormEvent } from "react";

export default function ContactSection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">تواصل معنا</h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            يسعدنا استقبال استفساراتكم وطلبات الإجازة والتواصل العلمي.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-islamic-cream p-8 rounded-3xl space-y-6 shadow-sm border border-islamic-gold/10">
              <h3 className="text-2xl font-bold text-islamic-green text-center mb-8">معلومات التواصل</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-islamic-cream rounded-xl flex items-center justify-center text-islamic-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">رقم الهاتف / واتساب</p>
                    <a 
                      href="https://wa.me/201022351450" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-gray-800 hover:text-islamic-green transition-colors" 
                      dir="ltr"
                    >
                      +20 102 235 1450
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-islamic-cream rounded-xl flex items-center justify-center text-islamic-gold">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">واتساب</p>
                    <a 
                      href="https://wa.me/201022351450" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-islamic-green hover:underline" 
                      dir="ltr"
                    >
                      إرسال رسالة مباشرة
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-islamic-cream rounded-xl flex items-center justify-center text-islamic-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">العنوان</p>
                  <p className="font-bold text-gray-800">القاهرة - جمهورية مصر العربية</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-dashed border-islamic-gold/30 rounded-3xl text-center">
              <p className="text-gray-500 text-sm">
                متاح للتواصل العلمي والاستشارات في علوم القراءات طوال أيام الأسبوع عبر الواتساب.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
