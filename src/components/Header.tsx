import { motion } from "motion/react";
import { Menu, X, BookOpen, User, Mic2, GraduationCap, Users, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "الرئيسية", icon: <User size={18} /> },
  { id: "cv", label: "السيرة الذاتية", icon: <GraduationCap size={18} /> },
  { id: "recitations", label: "القراءات", icon: <Mic2 size={18} /> },
  { id: "works", label: "المؤلفات", icon: <BookOpen size={18} /> },
  { id: "students", label: "التلاميذ", icon: <Users size={18} /> },
  { id: "contact", label: "تواصل معنا", icon: <Mail size={18} /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          <div className="w-10 h-10 bg-islamic-green rounded-full flex items-center justify-center text-islamic-gold">
            <BookOpen size={24} />
          </div>
          <span className="font-bold text-xl text-islamic-green hidden sm:block">الشيخ عبد الفتاح هيكل</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-islamic-green font-medium transition-colors flex items-center gap-1"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-islamic-green" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg border-t border-gray-100"
        >
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-islamic-green font-medium transition-colors flex items-center gap-3 text-right"
              >
                <span className="text-islamic-gold">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
