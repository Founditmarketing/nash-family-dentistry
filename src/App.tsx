import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import ScrollToTop from './components/scroll-to-top';

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Gallery from './pages/gallery';
import PatientCenter from './pages/patient-center';
import Testimonials from './pages/testimonials';
import Blog from './pages/blog';
import Contact from './pages/contact';
import PrivacyPolicy from './pages/privacy';
import MintDentalPearl from './pages/mint-dental-pearl';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/patient-center" element={<PatientCenter />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/mint-dental-pearl" element={<MintDentalPearl />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
