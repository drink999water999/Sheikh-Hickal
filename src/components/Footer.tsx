import { BookOpen, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-islamic-green text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-islamic-gold rounded-full flex items-center justify-center text-islamic-green">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl">الشيخ عبد الفتاح هيكل</h3>
              <p className="text-xs text-islamic-gold">الجامع للقراءات العشر ومحكم دولي</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Social media removed as requested */}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لموقع الشيخ عبد الفتاح هيكل.</p>
        </div>
      </div>
    </footer>
  );
}
