import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Nash+Family+Dentistry/@32.3410099,-90.8660773,17z';
const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/Nash+Family+Dentistry/@32.3410099,-90.8660773,17z/data=!4m13!1m5!8m4!1e1!2s101200508023517679675!3m1!1e1!3m6!1s0x8628e1cd938faf5f:0xcb601e9b4aa2f72c!8m2!3d32.3410054!4d-90.8638886!9m1!1b1';

const socials = [
  { href: 'https://www.facebook.com/NashFamilyDentistry', label: 'Facebook', icon: <Facebook className="h-4 w-4" /> },
  { href: 'https://www.instagram.com/nashfamilydentistry/', label: 'Instagram', icon: <Instagram className="h-4 w-4" /> },
  { href: 'https://www.youtube.com/channel/UCa7ZWcXZtnLyatLfdhNPZUQ', label: 'YouTube', icon: <Youtube className="h-4 w-4" /> },
];

export const Footer = () => (
  <footer id="main-footer" className="bg-black text-white pt-14 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        {/* Brand + Social */}
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
          <div className="flex gap-2">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="p-2.5 bg-white/5 rounded-lg hover:bg-vicksburg/20 hover:text-vicksburg transition-colors">
                {s.icon}
              </a>
            ))}
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews"
              className="p-2.5 bg-white/5 rounded-lg hover:bg-vicksburg/20 hover:text-vicksburg transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </a>
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
              { name: 'FAQ', path: '/faq' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
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
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-vicksburg shrink-0 mt-0.5" />
                <div>
                  1201 Mission Park Dr,<br />Vicksburg, MS 39180
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-vicksburg text-xs font-semibold mt-1 hover:underline">
                    Get Directions <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-vicksburg shrink-0" />
                <a href="tel:6016341812" className="hover:text-white transition-colors font-semibold">(601) 634-1812</a>
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
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>·</span>
          <span>General, Cosmetic & Laser Dentistry · Vicksburg, MS</span>
        </div>
      </div>
    </div>
  </footer>
);
