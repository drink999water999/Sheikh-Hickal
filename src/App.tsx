import Header from "./components/Header";
import Hero from "./components/Hero";
import CVSection from "./components/CVSection";
import RecitationsSection from "./components/RecitationsSection";
import WorksSection from "./components/WorksSection";
import StudentsSection from "./components/StudentsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <CVSection />
        <RecitationsSection />
        <WorksSection />
        <StudentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
