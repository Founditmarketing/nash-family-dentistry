import { Link } from 'react-router-dom';
import { Phone, Star, ChevronRight, CheckCircle2 } from 'lucide-react';
import { VideoCarousel } from '../components/video-carousel';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/Nash+Family+Dentistry/@32.3410099,-90.8660773,17z';

const services = [
  { title: 'Dental Implants', desc: 'Permanent tooth replacement — placed & restored in our office.', path: '/services' },
  { title: 'Cosmetic Dentistry', desc: 'Lumineers®, veneers, whitening & full smile makeovers.', path: '/services' },
  { title: 'Laser Dentistry', desc: 'Scalpel-free care for gum disease, TMJ & soft tissue.', path: '/services' },
  { title: 'General & Restorative', desc: 'CEREC crowns, root canals, fillings & sedation.', path: '/services' },
  { title: 'Dentures', desc: 'Complete, partial & implant-supported dentures.', path: '/services' },
  { title: 'Family Dentistry', desc: 'Gentle care for every age — starting at 3 years old.', path: '/services' },
];

const Home = () => (
  <div id="home-page" className="bg-white text-black">

    {/* PROMO — orange, Vicksburg brand */}
    <div className="bg-vicksburg text-white py-2.5 text-center font-bold text-xs sm:text-sm px-4">
      Nash Family Dentistry — Vicksburg, MS &nbsp;·&nbsp;
      <Link to="/contact" className="underline hover:no-underline">Book an Appointment →</Link>
    </div>

    {/* HERO */}
    <div className="relative min-h-[60vh] sm:min-h-[75vh] md:min-h-[82vh] flex items-center bg-black overflow-hidden">
      <img src="/images/hero.jpg" alt="Nash Family Dentistry" className="absolute inset-0 w-full h-full object-cover object-center opacity-30 sm:opacity-35" />
      <div className="relative z-10 container mx-auto px-5 sm:px-6 py-12 sm:py-20 max-w-3xl">
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-3">Est. 1998 · Vicksburg, MS</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
          <span className="text-vicksburg">Nash Family Dentistry</span><br />
          Changing Lives One Smile At A Time
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-7 max-w-xl">
          Father-son dentists Dr. Kenneth and Dr. Jonathan Nash — serving Vicksburg families since 1998.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/contact" className="btn-vicksburg text-base sm:text-lg px-6 py-3.5 rounded text-center">Book an Appointment</Link>
          <a href="tel:6016341812" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded border border-white/20 transition-colors text-base sm:text-lg">
            <Phone className="h-5 w-5 shrink-0" /> (601) 634-1812
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 sm:gap-5 text-white/50 text-xs sm:text-sm">
          {['Accepting New Patients', 'Most Insurance Accepted', 'Flexible Financing'].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-white/30 shrink-0" />{t}</span>
          ))}
        </div>
      </div>
    </div>

    {/* SERVICES */}
    <section id="home-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-black">Everything Under One Roof</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">No referrals needed. Dr. Kenneth and Dr. Jonathan handle it all in Vicksburg.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {services.map(s => (
            <Link key={s.title} to={s.path} className="group bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center">
              <h3 className="font-bold text-black mb-2 group-hover:text-vicksburg transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
              <span className="text-xs font-bold text-gray-400 group-hover:text-vicksburg inline-flex items-center gap-1 transition-colors">
                Learn More <ChevronRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="inline-block px-8 py-3 border-2 border-black text-black font-bold rounded hover:bg-black hover:text-white transition-all">
            View All Services
          </Link>
        </div>
      </div>
    </section>

    {/* MEET THE DOCTORS */}
    <section id="home-doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-black">Meet Your Doctors</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {[
            { img: '/images/dr-kenneth.jpg', name: 'Dr. Kenneth Nash, DDS', role: 'Founder — Est. 1998', bio: 'Meharry Medical College DDS · Lumineers® Certified · AACD Member · Laser Periodontics · Sedation Dentistry' },
            { img: '/images/dr-jonathan.jpg', name: 'Dr. Jonathan Nash, DDS', role: 'Associate Dentist — Joined 2016', bio: 'Meharry Medical College DDS · UMMC AEGD Residency · CEREC Certified · Pamela Royal Scholarship' },
          ].map(doc => (
            <div key={doc.name} className="flex items-start gap-6">
              <img src={doc.img} alt={doc.name} className="w-24 h-24 rounded-full object-cover shadow-md grayscale hover:grayscale-0 transition-all duration-500 shrink-0 border-2 border-gray-100" />
              <div>
                <h3 className="font-bold text-black text-lg">{doc.name}</h3>
                <p className="text-vicksburg text-xs font-bold uppercase tracking-widest mb-2">{doc.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{doc.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/about" className="inline-block px-8 py-3 border-2 border-black text-black font-bold rounded hover:bg-black hover:text-white transition-all">
            Full Doctor Bios
          </Link>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section id="home-testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-black">What Patients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'I would recommend Dr. Kenneth Nash and his son Dr. Jonathan. They explain everything, do root canals and implants right in the office, and I have always been satisfied.',
            'What a wonderful dentist. Extremely happy with his service and bedside manner. The whole team makes you feel at home. Highly recommend Nash Family Dentistry.',
          ].map((q, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-lg p-7 shadow-sm">
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}</div>
              <p className="italic text-gray-600 text-sm leading-relaxed mb-4">"{q}"</p>
              <p className="font-bold text-black text-xs uppercase tracking-widest">— Verified Google Patient</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/testimonials" className="inline-block px-6 py-3 bg-black text-white font-bold rounded hover:bg-gray-800 transition-all text-sm">More Reviews</Link>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-black text-black font-bold rounded hover:bg-black hover:text-white transition-all text-sm">⭐ Leave a Review</a>
        </div>
      </div>
    </section>

    {/* VIDEOS — embedded across vicksburgdentist.com */}
    <section id="home-videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <VideoCarousel
          heading="See Our Practice"
          subheading="Videos featured on vicksburgdentist.com — meet our team, see real results, and learn about our services."
          videos={[
            { id: 'fZAHI5l9yjs', title: 'Nash Family Dentistry — Vicksburg, MS', duration: 129 },
            { id: 'BRrUUB2-JyM', title: 'Dental Veneers Testimonial — Vicksburg, MS', duration: 86 },
            { id: 'HvPLOpLMEok', title: 'Teeth Whitening — Dr. Kenneth Nash', duration: 93 },
          ]}
        />
      </div>
    </section>

    {/* MINT DENTAL PEARL TEASER — green accent */}
    <section id="home-pearl" className="py-20 bg-white border-l-8 border-pearl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative">
            <img src="/images/pearl-office.jpg" alt="Mint Dental Pearl — Pearl, MS"
              className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]" />
            <div className="absolute top-4 left-4">
              <img src="/images/pearl-logo.png" alt="Mint Dental Pearl" className="h-10 bg-white/90 px-3 py-1 rounded shadow" />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-pearl mb-3">Our Sister Practice</p>
            <h2 className="text-3xl font-black text-black mb-4">
              Also Serving Pearl, MS —<br />
              <span className="text-pearl">Mint Dental Pearl</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Where art meets science. Mint Dental in Pearl, MS offers innovative general, cosmetic, and children's dentistry in a modern, welcoming environment — right in the heart of Pearl.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Led by Dr. Alexa Lampkin, serving Pearl, Brandon, Richland, Jackson, and all surrounding communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/mint-dental-pearl" className="btn-pearl rounded inline-block">Learn More About Pearl</Link>
              <a href="tel:6018825600" className="inline-flex items-center gap-2 border-2 border-pearl text-pearl font-bold px-6 py-3 rounded hover:bg-pearl hover:text-white transition-all text-sm">
                <Phone className="h-4 w-4" /> (601) 882-5600
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="home-cta" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
        <p className="text-white/60 mb-8">Book your appointment at Nash Family Dentistry in Vicksburg, MS. New patients always welcome.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-vicksburg text-lg px-8 py-4 rounded inline-block">Book an Appointment</Link>
          <a href="tel:6016341812" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded border border-white/20 transition-colors text-lg">
            <Phone className="h-5 w-5" /> (601) 634-1812
          </a>
        </div>
        <p className="text-white/30 text-sm mt-6">1201 Mission Park Dr · Vicksburg, MS 39180</p>
      </div>
    </section>
  </div>
);

export default Home;
