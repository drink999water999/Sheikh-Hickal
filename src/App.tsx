import Header from "./components/Header";
import Hero from "./components/Hero";
import CVSection from "./components/CVSection";
import RecitationsSection from "./components/RecitationsSection";
import WorksSection from "./components/WorksSection";
import StudentsSection from "./components/StudentsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <CVSection />
        <StudentsSection />
        <RecitationsSection />
        <WorksSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
