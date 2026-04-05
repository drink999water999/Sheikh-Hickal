import { motion } from "motion/react";
import { Book, CheckCircle2 } from "lucide-react";

const works = [
  {
    title: "التحليلات التجويدية في شرح المقدمة الجزرية",
    description: "بالمشاركة مع أ.د. أحمد عيسى المعصراوي",
    type: "شرح علمي"
  },
  {
    title: "تهذيب إتحاف فضلاء البشر للبنا الدمياطي",
    description: "بالمشاركة مع أ.د. أحمد عيسى المعصراوي",
    type: "تهذيب وتحقيق"
  },
  {
    title: "تحبير البدور الزاهرة للشيخ القاضي",
    description: "بالمشاركة مع أ.د. أحمد عيسى المعصراوي",
    type: "تحبير"
  },
  {
    title: "تهذيب النشر لابن الجزري",
    description: "بالمشاركة مع أ.د. أحمد عيسى المعصراوي",
    type: "تهذيب"
  },
  {
    title: "تحقيق متون الشاطبية والدرة والطيبة",
    description: "بالمشاركة مع أ.د. أحمد عيسى المعصراوي",
    type: "تحقيق"
  }
];

export default function WorksSection() {
  return (
    <section id="works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">المؤلفات والتحقيقات</h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            مجموعة من الكتب والمؤلفات العلمية في علوم القراءات والتجويد، تم إنجاز معظمها بالتعاون مع كبار العلماء.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-start gap-6 p-6 bg-islamic-cream rounded-2xl border border-islamic-gold/10 hover:border-islamic-gold transition-colors"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-islamic-gold shadow-sm shrink-0">
                <Book size={28} />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-islamic-green/10 text-islamic-green text-xs font-bold rounded-full mb-2">
                  {work.type}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-islamic-gold" />
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
