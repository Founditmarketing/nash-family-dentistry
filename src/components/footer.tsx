import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => (
  <footer id="main-footer" className="bg-black text-white pt-14 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="block">
            <span className="text-xl font-black font-display">
              <span className="text-vicksburg">NASH</span> FAMILY DENTISTRY
            </span>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-0.5">Changing Lives One Smile At A Time</p>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Founded in 1998 by Dr. Kenneth Nash. Father-son dental care for Vicksburg, MS and surrounding communities.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/NashFamilyDentistry" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="p-2 bg-white/5 rounded hover:bg-white/10 transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/nashfamilydentistry/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="p-2 bg-white/5 rounded hover:bg-white/10 transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.youtube.com/channel/UCa7ZWcXZtnLyatLfdhNPZUQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="p-2 bg-white/5 rounded hover:bg-white/10 transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Our Services', path: '/services' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Patient Center', path: '/patient-center' },
              { name: 'Reviews', path: '/testimonials' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
              { name: 'Privacy Policy', path: '/privacy' },
            ].map(l => (
              <li key={l.path}><Link to={l.path} className="text-gray-400 hover:text-white transition-colors">{l.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Mint Dental Pearl */}
        <div className="space-y-4">
          <Link to="/mint-dental-pearl" className="block">
            <img src="/images/pearl-logo.png" alt="Mint Dental Pearl" className="h-10 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">Our sister practice in Pearl, MS — led by Dr. Alexa Lampkin.</p>
          <div className="space-y-2 text-sm text-gray-400">
            <p className="flex items-start gap-2"><MapPin className="h-4 w-4 text-pearl shrink-0 mt-0.5" />190 Riverwind E Dr., Suite 201<br />Pearl, MS 39208</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-pearl shrink-0" />
              <a href="tel:6018825600" className="hover:text-white transition-colors">(601) 882-5600</a>
            </p>
          </div>
          <Link to="/mint-dental-pearl" className="inline-block text-pearl font-bold text-sm hover:underline">View Pearl Office →</Link>
        </div>

        {/* Contact + Hours */}
        <div className="space-y-5">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-vicksburg shrink-0 mt-0.5" />1201 Mission Park Dr,<br />Vicksburg, MS 39180</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-vicksburg shrink-0" />
                <a href="tel:6016341812" className="hover:text-white transition-colors">(601) 634-1812</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Hours</h4>
            <div className="text-xs text-gray-500 space-y-1">
              <p><span className="text-gray-300 font-semibold">Mon–Thu:</span> 8:00 AM – 5:30 PM</p>
              <p><span className="text-gray-300 font-semibold">Friday*:</span> 8:00 AM – 12:00 PM</p>
              <p><span className="text-gray-300 font-semibold">Sat–Sun:</span> Closed</p>
              <p className="italic text-gray-600 mt-1">*Alternating — call to confirm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Nash Family Dentistry. All rights reserved.</p>
        <p>General, Cosmetic &amp; Laser Dentistry · Vicksburg, MS</p>
      </div>
    </div>
  </footer>
);
