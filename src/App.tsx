import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CVSection from "./components/CVSection";
import RecitationsSection from "./components/RecitationsSection";
import WorksSection from "./components/WorksSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StudentsPage from "./pages/StudentsPage";

function HomePage() {
  return (
    <>
      <Hero />
      <CVSection />
      <RecitationsSection />
      <WorksSection />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
