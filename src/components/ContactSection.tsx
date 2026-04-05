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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-islamic-cream p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-islamic-green mb-4">معلومات التواصل</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-islamic-gold shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">رقم الهاتف</p>
                  <p className="font-bold text-gray-800" dir="ltr">+20 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-islamic-gold shadow-sm">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">واتساب</p>
                  <a href="#" className="font-bold text-islamic-green hover:underline" dir="ltr">إرسال رسالة مباشرة</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-islamic-gold shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">البريد الإلكتروني</p>
                  <p className="font-bold text-gray-800">info@sheikh-heikal.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-islamic-gold shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">العنوان</p>
                  <p className="font-bold text-gray-800">جمهورية مصر العربية - المنوفية</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-dashed border-islamic-gold/30 rounded-3xl text-center">
              <p className="text-gray-500 text-sm">
                متاح للتواصل العلمي والاستشارات في علوم القراءات طوال أيام الأسبوع.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">الاسم الكامل</label>
                  <input 
                    type="text" 
                    placeholder="أدخل اسمك هنا"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-islamic-gold focus:ring-2 focus:ring-islamic-gold/20 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-islamic-gold focus:ring-2 focus:ring-islamic-gold/20 outline-none transition-all text-left"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">الموضوع</label>
                <input 
                  type="text" 
                  placeholder="ما هو موضوع رسالتك؟"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-islamic-gold focus:ring-2 focus:ring-islamic-gold/20 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">الرسالة</label>
                <textarea 
                  rows={5}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-islamic-gold focus:ring-2 focus:ring-islamic-gold/20 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-islamic-green text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-islamic-gold hover:text-islamic-green transition-all shadow-lg"
              >
                <Send size={20} />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
