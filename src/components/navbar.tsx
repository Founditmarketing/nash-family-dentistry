import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks: { name: string; path: string; pearl?: boolean }[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Patients', path: '/patient-center' },
  { name: 'Reviews', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
  { name: 'Mint Dental Pearl', path: '/mint-dental-pearl', pearl: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Top bar — black, orange phone = Vicksburg brand */}
      <div className="bg-black text-white py-2 text-center text-[11px] font-semibold uppercase tracking-widest px-4">
        Nash Family Dentistry &nbsp;·&nbsp;
        <a href="tel:6016341812" className="text-vicksburg font-bold hover:underline">(601) 634-1812</a>
        &nbsp;·&nbsp; Vicksburg, MS &nbsp;·&nbsp; Mon–Thu 8am–5:30pm · Fri 8am–12pm
      </div>

      <nav className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 flex items-center justify-between py-4">

          {/* Logo — NASH in orange */}
          <Link id="nav-logo" to="/" className="flex flex-col shrink-0">
            <span className="text-xl md:text-2xl font-black font-display leading-none tracking-tight">
              <span className="text-vicksburg">NASH</span>
              <span className="text-black"> FAMILY DENTISTRY</span>
            </span>
            <span className="text-[9px] font-semibold text-gray-400 tracking-widest uppercase mt-0.5">
              Vicksburg, MS · Changing Lives One Smile At A Time
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-bold rounded transition-colors ${
                  link.pearl
                    ? isActive(link.path)
                      ? 'text-pearl border-b-2 border-pearl'
                      : 'text-pearl hover:text-pearl-dark'
                    : isActive(link.path)
                      ? 'text-black border-b-2 border-vicksburg'
                      : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200 flex items-center gap-3">
              <a href="tel:6016341812" className="hidden xl:flex items-center gap-1.5 text-gray-500 hover:text-black text-sm font-bold transition-colors">
                <Phone className="h-4 w-4" /> (601) 634-1812
              </a>
              <Link to="/contact" className="btn-vicksburg text-sm px-5 py-2.5 rounded whitespace-nowrap">Book Appointment</Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button id="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-700">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path}
                    className={`block py-2.5 px-3 rounded font-semibold text-sm transition-colors ${
                      isActive(link.path) ? 'bg-gray-50 text-black font-bold' : 'text-gray-600 hover:text-black'
                    }`}>
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <a href="tel:6016341812" className="flex items-center gap-2 font-bold text-gray-700">
                    <Phone className="h-4 w-4 text-vicksburg" /> (601) 634-1812
                  </a>
                  <Link to="/contact" className="btn-vicksburg block w-full text-center rounded py-3 text-sm">Book Appointment</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
