import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, ChevronRight } from 'lucide-react';

// All data scraped from mintdentalpearl.com
const PEARL_PHONE = '(601) 882-5600';
const PEARL_PHONE_RAW = '6018825600';
const PEARL_ADDRESS = '190 Riverwind E Dr., Suite 201, Pearl, MS 39208';
const PEARL_AREAS = ['Pearl', 'Brandon', 'Richland', 'Jackson', 'Flowood', 'Reservoir area'];

const pearlHours = [
  { day: 'Monday', hours: '9am – 5pm' },
  { day: 'Tuesday', hours: '9am – 6pm' },
  { day: 'Wednesday', hours: '9am – 5pm' },
  { day: 'Thursday', hours: '9am – 3pm' },
  { day: 'Friday', hours: 'Closed' },
  { day: 'Saturday', hours: 'Closed' },
];

const pearlServices = [
  { title: 'General Dentistry', desc: 'Preventive cleanings, exams, X-rays, fillings, and comprehensive oral health evaluations.' },
  { title: 'Cosmetic Dentistry', desc: 'Porcelain veneers, professional whitening, and smile enhancement treatments.' },
  { title: "Children's Dentistry", desc: 'Gentle, friendly care for the youngest members of your family from their very first visit.' },
  { title: 'Restorative Dentistry', desc: 'Crowns, bridges, and restorations to rebuild damaged or missing teeth.' },
  { title: 'Dental Implants', desc: 'Permanent tooth replacement solutions evaluated and placed right here in Pearl.' },
  { title: 'Root Canals', desc: 'Comfortable, precise endodontic treatment to save infected teeth and relieve pain.' },
];

// Reviews scraped verbatim from mintdentalpearl.com
const pearlReviews = [
  'So happy I found my dental place! All the staff are so cool, down to earth, knowledgeable and patient. Dr. Lampkin was funny and quick. This is the first time I\'ve ever had fillings done and my teeth felt normal afterward.',
  'Never felt more welcomed to an establishment. Everyone is very friendly and reassuring.',
  'Mint Dental is an amazing office! Dr. Lampkin and her staff was amazing. They were extremely helpful with myself and my 1 year old for her first dentist visit! I definitely recommend this office for the whole family.',
  'Dr. Lampkin is the BEST! This is an amazing place! It has a nice ambience with friendly, knowledgeable staff to match. HIGHLY RECOMMEND!!!',
];

const MintDentalPearl = () => (
  <div id="pearl-page" className="bg-white text-black">

    {/* Hero — Pearl green */}
    <div className="bg-pearl text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-4">Pearl, MS · Where Art Meets Science</p>
            <img src="/images/pearl-logo.png" alt="Mint Dental Pearl logo" className="h-16 mb-6 brightness-0 invert" />
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Mint Dental<br />In Pearl, MS
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Where art meets science — innovative dental care in a comfortable, seamless environment. Serving Pearl, Brandon, Richland, Jackson, and surrounding communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PEARL_PHONE_RAW}`} className="btn-pearl bg-white text-pearl hover:bg-gray-100 px-6 py-3 rounded font-black text-sm inline-block">
                Call {PEARL_PHONE}
              </a>
              <a href="https://mintdentalpearl.com" target="_blank" rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-all text-sm">
                Visit mintdentalpearl.com ↗
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="/images/pearl-office.jpg" alt="Mint Dental Pearl reception — Pearl, MS"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-4 -left-4 bg-black text-white p-4 rounded-lg shadow-xl">
              <p className="font-black text-lg">190 Riverwind E Dr.</p>
              <p className="text-white/60 text-sm">Suite 201, Pearl, MS 39208</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Dr. Lampkin */}
    <section id="pearl-doctor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-4xl mx-auto">
          <div className="text-center">
            <img src="/images/dr-lampkin.png" alt="Dr. Alexa Lampkin — Mint Dental Pearl"
              className="w-56 h-56 rounded-full object-cover mx-auto shadow-xl border-4 border-gray-100" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-pearl mb-3">Meet Your Dentist</p>
            <h2 className="text-3xl font-black text-black mb-2">Dr. Alexa Lampkin</h2>
            <p className="text-pearl font-bold uppercase tracking-widest text-xs mb-5">General & Cosmetic Dentist — Pearl, MS</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Lampkin leads Mint Dental's mission of combining innovative dental care with a welcoming, patient-centered environment. Known for her approachable style and thorough explanations, she makes every patient — from first-time visitors to anxious adults — feel comfortable and informed.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mint Dental offers a refined dental experience that focuses on modern solutions that are both effective and easy, right in the heart of Pearl, MS.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="pearl-services" className="py-20 bg-gray-50 border-l-8 border-pearl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-pearl mb-3">What We Offer</p>
          <h2 className="text-3xl font-black text-black">Comprehensive Dental Care in Pearl</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">General, Cosmetic & Children's Dentistry — all in one modern Pearl, MS office.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pearlServices.map(s => (
            <div key={s.title} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all group">
              <h3 className="font-bold text-black mb-2 group-hover:text-pearl transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://mintdentalpearl.com/services/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-pearl text-pearl font-bold rounded hover:bg-pearl hover:text-white transition-all">
            All Pearl Services <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    {/* Hours & Info */}
    <section id="pearl-info" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Hours */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-pearl mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" /> Office Hours
            </p>
            <div className="space-y-2">
              {pearlHours.map(({ day, hours }) => (
                <div key={day} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                  <span className="font-bold text-black">{day}</span>
                  <span className={hours === 'Closed' ? 'text-gray-400' : 'text-gray-600'}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-pearl mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Location
              </p>
              <p className="text-gray-700 font-semibold">{PEARL_ADDRESS}</p>
              <a
                href="https://maps.google.com/?q=190+Riverwind+E+Dr+Suite+201+Pearl+MS+39208"
                target="_blank" rel="noopener noreferrer"
                className="text-pearl font-bold text-sm hover:underline mt-2 inline-block"
              >Get Directions ↗</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-pearl mb-3 flex items-center gap-2">
                <Phone className="h-4 w-4" /> Contact
              </p>
              <a href={`tel:${PEARL_PHONE_RAW}`} className="text-2xl font-black text-black hover:text-pearl transition-colors">{PEARL_PHONE}</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Areas Served</p>
              <div className="flex flex-wrap gap-2">
                {PEARL_AREAS.map(area => (
                  <span key={area} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pearl Reviews — scraped verbatim from mintdentalpearl.com */}
    <section id="pearl-reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-pearl mb-3">What Pearl Patients Say</p>
          <h2 className="text-3xl font-black text-black">Mint Dental Reviews</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pearlReviews.map((review, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-lg p-7 shadow-sm">
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}</div>
              <p className="italic text-gray-600 text-sm leading-relaxed">"{review}"</p>
              <p className="font-bold text-black text-xs uppercase tracking-widest mt-4">— Verified Google Patient</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pearl CTA — green */}
    <section id="pearl-cta" className="py-20 bg-pearl text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-black mb-4">Book at Mint Dental Pearl</h2>
        <p className="text-white/70 mb-8 text-lg">Serving Pearl, Brandon, Richland, Jackson, and surrounding communities. Call or visit our website to schedule.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${PEARL_PHONE_RAW}`}
            className="inline-flex items-center gap-2 bg-white text-pearl font-black px-8 py-4 rounded hover:bg-gray-100 transition-all text-lg">
            <Phone className="h-5 w-5" /> {PEARL_PHONE}
          </a>
          <a href="https://mintdentalpearl.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-all text-lg">
            Visit Website ↗
          </a>
        </div>
        <p className="text-white/40 text-sm mt-6">{PEARL_ADDRESS}</p>
      </div>
    </section>

    {/* Link back to Nash */}
    <div className="bg-black text-white py-8 text-center">
      <p className="text-gray-500 text-sm mb-2">Also looking for dental care in Vicksburg?</p>
      <Link to="/" className="text-vicksburg font-bold hover:underline text-lg">
        Nash Family Dentistry — Vicksburg, MS →
      </Link>
    </div>
  </div>
);

export default MintDentalPearl;
