import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { BeforeAfterSlider } from '../components/before-after-slider';

const galleryItems = [
  { before: '/images/smile-before-1.jpg', after: '/images/smile-after-1.jpg', label: 'Smile Makeover', category: 'Cosmetic' },
  { before: '/images/smile-before-2.jpg', after: '/images/smile-after-2.jpg', label: 'Smile Transformation', category: 'Cosmetic' },
  { before: '/images/smile-before-3.jpg', after: '/images/smile-after-3.jpg', label: 'Cosmetic Restoration', category: 'Cosmetic' },
  { before: '/images/lumineer-before-1.jpg', after: '/images/lumineer-after-1.jpg', label: 'Lumineers® Case 1', category: 'Lumineers®' },
  { before: '/images/lumineer-before-2.jpg', after: '/images/lumineer-after-2.jpg', label: 'Lumineers® Case 2', category: 'Lumineers®' },
  { before: '/images/gallery-before-2.jpg', after: '/images/gallery-after-2.jpg', label: 'Full Restoration', category: 'Restorative' },
  { before: '/images/gallery-before-3.jpg', after: '/images/gallery-after-3.jpg', label: 'Cosmetic Enhancement', category: 'Cosmetic' },
  { before: '/images/crown-before.jpg', after: '/images/crown-after.jpg', label: 'CEREC Crown', category: 'Restorative' },
];

const categories = ['All', 'Cosmetic', 'Lumineers®', 'Restorative'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory);

  return (
    <div id="gallery-page" className="bg-white">
      {/* Page header */}
      <div className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Before &amp; After Gallery</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Real patient results from Nash Family Dentistry — drag the handle to compare.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 font-bold rounded transition-all text-sm border-2 ${
                activeCategory === cat
                  ? 'bg-black border-black text-white'
                  : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
              }`}
            >{cat}</button>
          ))}
        </div>

        {/* Slider grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <BeforeAfterSlider
              key={i}
              before={item.before}
              after={item.after}
              beforeAlt={`${item.label} — Before`}
              afterAlt={`${item.label} — After`}
              label={item.label}
              category={item.category}
            />
          ))}
        </div>

        {/* Additional standalone images */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { src: '/images/gallery-longways.jpg', label: 'Smile Gallery', cat: 'Cosmetic' },
            { src: '/images/implants-2.jpg', label: 'Dental Implants', cat: 'Implants' },
            { src: '/images/laser.jpg', label: 'Laser Dentistry', cat: 'Laser' },
          ].map((img) => (
            <div key={img.label} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                <div>
                  <p className="font-bold text-white text-sm">{img.label}</p>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-2 py-0.5 rounded">{img.cat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-50 rounded-xl p-10 text-center border border-gray-100">
          <h3 className="text-2xl font-black text-black mb-3">All photos are real Nash Family Dentistry patient cases</h3>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            Sourced directly from{' '}
            <a href="https://www.vicksburgdentist.com/before-and-after-photos/" target="_blank" rel="noopener noreferrer"
              className="text-vicksburg font-bold hover:underline">vicksburgdentist.com</a>.
            Ready to transform your smile?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-vicksburg px-8 py-3 rounded inline-block">Book a Consultation</Link>
            <a href="https://www.vicksburgdentist.com/before-and-after-photos/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-8 py-3 rounded hover:bg-black hover:text-white transition-all">
              See Full Gallery <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
