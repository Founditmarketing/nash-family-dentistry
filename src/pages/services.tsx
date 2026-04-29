import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronRight, Award, Smile, Zap, Stethoscope, CircleEllipsis, Baby } from 'lucide-react';

// All content sourced from vicksburgdentist.com
const services = [
  {
    id: 'implants',
    icon: Award,
    title: 'Dental Implants',
    subtitle: 'The permanent, gold-standard solution for missing teeth',
    image: '/images/implants-2.jpg',
    intro: 'Dental implants are the most ideal long-term solution for missing teeth. Functioning just like natural teeth, implants provide superior aesthetics, restore full chewing function, and actively support long-term oral health.',
    body: 'At Nash Family Dentistry, our dentists complete all aspects of the implant treatment process in our Vicksburg office — from surgical placement to custom crown restoration. Dr. Kenneth Nash has over 40 years of experience placing and restoring implants. We also offer bone grafting when needed to ensure the best foundation for your implant.',
    items: [
      { name: 'Single Tooth Implants', desc: 'Replace a single missing tooth with a permanent, natural-looking implant and crown — no impact on adjacent teeth.' },
      { name: 'Implant Overdentures', desc: 'Stabilize a full or partial denture with implant anchors, dramatically improving fit, comfort, and chewing power.' },
      { name: 'Mini Dental Implants', desc: 'A narrower implant option requiring less bone density — ideal for patients who may not qualify for standard implants.' },
      { name: 'Mini Implants for Lower Dentures', desc: 'A highly effective solution for stabilizing lower dentures, which are notoriously difficult to keep in place.' },
      { name: 'Bone Grafting', desc: 'Rebuild the bone foundation needed for successful implant placement if you\'ve experienced bone loss due to tooth loss or gum disease.' },
    ],
  },
  {
    id: 'cosmetic',
    icon: Smile,
    title: 'Cosmetic Dentistry',
    subtitle: 'Lumineers®-Certified Provider — smile transformations by Dr. Kenneth Nash, AACD member',
    image: '/images/smile-after-1.jpg',
    intro: 'Cosmetic dentistry refers to any number of procedures concerned with the aesthetics of the smile. Dr. Kenneth Nash is a member of the American Academy of Cosmetic Dentistry and a certified Lumineers® dentist — bringing artistry and precision to every smile transformation.',
    body: 'From subtle enhancements like professional whitening to complete smile makeovers using Lumineers® or Snap-On Smile®, our cosmetic offerings are designed to restore balance, harmony, and confidence to your smile. Every cosmetic treatment begins with a thorough consultation to understand your goals and create a personalized plan.',
    items: [
      { name: 'Lumineers®', desc: 'Ultra-thin, contact-lens-style veneers that require little to no tooth reduction. Dr. Nash is Lumineers Certified by Den-Mat Dental Labs.' },
      { name: 'Porcelain Veneers', desc: 'Custom-crafted porcelain shells that cover the front surface of teeth for a dramatic, lasting smile transformation.' },
      { name: 'Snap-On Smile®', desc: 'A reversible, removable arch that snaps over your existing teeth for an immediate smile enhancement — no drilling required.' },
      { name: 'Full Mouth Reconstruction', desc: 'A comprehensive plan combining restorative and cosmetic treatments to rebuild function, health, and beauty together.' },
      { name: 'Teeth Whitening', desc: 'Professional-grade whitening delivers dramatically brighter results than store-bought alternatives, safely and in far less time.' },
      { name: 'Dental Bonding', desc: 'A quick, cost-effective way to repair chips, cracks, or discoloration using tooth-colored composite resin.' },
    ],
  },
  {
    id: 'laser',
    icon: Zap,
    title: 'Laser Dentistry',
    subtitle: 'Scalpel-free, virtually painless care with faster recovery',
    image: '/images/laser.jpg',
    intro: 'Laser dentistry allows our dentists to provide scalpel-free care for both cosmetic and functional concerns. Dr. Kenneth Nash has completed Advanced Laser Periodontics Training — bringing state-of-the-art laser technology to Vicksburg for over two decades.',
    body: 'Utilizing targeted laser light, we perform safe and comfortable procedures that are virtually painless and promote quick patient recovery. Many laser procedures require no sutures, minimal anesthesia, and carry a significantly lower risk of infection than traditional surgical approaches. Laser dentistry is particularly powerful for treating gum disease with pinpoint precision.',
    items: [
      { name: 'Gum Disease Treatment', desc: 'Advanced laser periodontal therapy targets and removes infected tissue with precision, promoting healthy gum reattachment without scalpels.' },
      { name: 'Soft Tissue Recontouring', desc: 'Also called a "gum lift," laser recontouring reshapes the gum line for a more balanced, aesthetically pleasing smile — often in a single visit.' },
      { name: 'TMJ Treatment', desc: 'Laser therapy can help reduce inflammation and pain associated with temporomandibular joint disorder, providing lasting relief for jaw pain.' },
      { name: 'Periodontal Maintenance', desc: 'Ongoing laser-assisted maintenance keeps gum disease in remission, protecting your teeth and bone health long-term.' },
      { name: 'Frenectomies', desc: 'A laser frenectomy releases a tight labial or lingual frenum quickly and comfortably — ideal for infants with tongue-tie and adults with related concerns.' },
    ],
  },
  {
    id: 'general',
    icon: Stethoscope,
    title: 'General & Restorative',
    subtitle: 'Comprehensive care to protect, restore, and preserve your smile',
    image: '/images/crown-after.jpg',
    intro: 'General and restorative dentistry forms the foundation of a healthy smile. From preventive cleanings to CEREC same-day crowns, Nash Family Dentistry provides the full spectrum of essential care in one familiar, trusted Vicksburg location.',
    body: 'We believe prevention is the most powerful tool in dentistry. Regular cleanings and exams allow our team to catch problems early — before they become costly or complex. Dr. Jonathan Nash is certified in CEREC technology, meaning patients needing a crown can often receive a permanent, precision-milled restoration in a single visit. For anxious patients, we offer nitrous oxide and oral sedation.',
    items: [
      { name: 'Dental Cleanings & Exams', desc: 'Professional cleanings and thorough exams — including digital X-rays and oral cancer screening. Recommended every 6 months for most patients.' },
      { name: 'CEREC Same-Day Crowns', desc: 'Dr. Jonathan Nash uses CEREC technology to design, mill, and place a permanent ceramic crown in a single appointment. No temporaries, no second visit.' },
      { name: 'Root Canals', desc: 'Root canal therapy relieves pain from an infected tooth and saves it from extraction. Modern techniques make root canals far more comfortable than their reputation suggests.' },
      { name: 'Crowns & Bridges', desc: 'Porcelain crowns restore strength and appearance to damaged teeth. Bridges replace one or more missing teeth using adjacent teeth for support.' },
      { name: 'Composite Fillings', desc: 'Tooth-colored composite resin fillings are virtually invisible and bond directly to the tooth, requiring minimal removal of healthy tooth structure.' },
      { name: 'Sedation Dentistry', desc: 'We offer nitrous oxide and oral sedation to help anxious patients receive the care they need in a relaxed, comfortable state.' },
    ],
  },
  {
    id: 'dentures',
    icon: CircleEllipsis,
    title: 'Dentures',
    subtitle: 'Restore your smile, confidence, and quality of life',
    image: '/images/benefits.jpg',
    intro: 'Modern dentures are more comfortable, natural-looking, and functional than ever before. Whether you need to replace a few teeth or a full arch, Nash Family Dentistry offers custom-fit denture solutions designed to restore your smile and your quality of life.',
    body: 'We take a thorough and personalized approach to denture care, beginning with a comprehensive evaluation to determine the best solution for your anatomy, lifestyle, and goals. For patients who want the most stable, functional experience possible, we also offer implant-supported and implant-stabilized options — anchored by dental implants to eliminate slipping and discomfort.',
    items: [
      { name: 'Complete Dentures', desc: 'Full upper or lower arch replacements for patients who have lost all their teeth. Custom-fabricated for fit, function, and a natural appearance.' },
      { name: 'Partial Dentures', desc: 'Replace multiple missing teeth when some natural teeth remain. Partial dentures clip onto existing teeth for stability while restoring your smile.' },
      { name: 'Denture Stabilization', desc: 'Improve the fit and function of an existing denture using implant anchors. Dramatically reduces slipping, discomfort, and the need for adhesives.' },
      { name: 'Implant-Supported Dentures', desc: 'The most stable denture option available. Multiple implants support a full arch restoration that functions more like natural teeth.' },
      { name: 'Denture Care & Maintenance', desc: 'Proper care extends the life of your denture and protects your oral health. We provide complete guidance on daily cleaning, storage, and adjustments.' },
    ],
  },
  {
    id: 'family',
    icon: Baby,
    title: 'Family Dentistry',
    subtitle: 'Gentle, welcoming care for every member of your family — ages 3 to adult',
    image: '/images/office-broll.jpg',
    intro: 'Nash Family Dentistry is a true family practice — one that has served multiple generations of Vicksburg families since 1998. We provide gentle, compassionate care for patients of all ages, creating positive dental experiences that establish a lifetime of healthy habits.',
    body: 'We recommend a child\'s first dental visit by age 3, or when their first tooth appears. Early visits build comfort with the dental environment and establish preventive habits that protect against cavities. For adult family members, we offer the full range of general, cosmetic, restorative, and laser dental services — no referrals needed for most procedures.',
    items: [
      { name: 'Children\'s First Dental Visits', desc: 'We recommend first visits by age 3. Our gentle, child-friendly approach builds trust and positive associations from the very first appointment.' },
      { name: 'Comprehensive Exams', desc: 'Thorough exams for patients of all ages — including digital X-rays, oral cancer screening, and a detailed treatment discussion.' },
      { name: 'Professional Cleanings', desc: 'Regular cleanings remove tartar buildup that brushing can\'t reach and give us the opportunity to monitor your oral health closely.' },
      { name: 'Dental Sealants', desc: 'Thin protective coatings applied to the chewing surfaces of back teeth — especially effective at preventing cavities in children.' },
      { name: 'Fluoride Treatments', desc: 'Professional fluoride strengthens enamel and helps prevent cavities — an especially valuable tool for growing children.' },
    ],
  },
];

const Services = () => (
  <div id="services-page" className="bg-white text-black">

    {/* Page header */}
    <div className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Nash Family Dentistry · Vicksburg, MS</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Comprehensive Dental Care Under One Roof</h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">From routine cleanings to full smile transformations — Dr. Kenneth and Dr. Jonathan Nash handle it all in our Vicksburg office. No referrals needed.</p>
      </div>
    </div>

    {/* Jump nav */}
    <div className="sticky top-[73px] z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-1 py-3 no-scrollbar justify-center">
          {services.map(s => (
            <a key={s.id} href={`#${s.id}`}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-black hover:bg-gray-50 rounded-md whitespace-nowrap transition-colors shrink-0">
              <s.icon className="h-3.5 w-3.5" />{s.title}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Service sections */}
    {services.map((s, i) => {
      const Icon = s.icon;
      const isEven = i % 2 === 0;
      return (
        <section key={s.id} id={s.id} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'} scroll-mt-32`}>
          <div className="container mx-auto px-4">

            {/* Section header */}
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-black rounded-lg">
                <Icon className="h-6 w-6 text-vicksburg" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-black">{s.title}</h2>
                <p className="text-gray-500 text-sm">{s.subtitle}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Image */}
              <div className={`lg:${isEven ? 'order-1' : 'order-2'}`}>
                <img src={s.image} alt={s.title}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg" />
              </div>

              {/* Content */}
              <div className={`lg:${isEven ? 'order-2' : 'order-1'}`}>
                <p className="text-gray-800 font-semibold text-lg leading-relaxed mb-4">{s.intro}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{s.body}</p>

                <h3 className="text-xs font-black uppercase tracking-widest text-vicksburg mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {s.items.map(item => (
                    <li key={item.name} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-black text-sm">{item.name}</span>
                        <span className="text-gray-500 text-sm"> — {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-vicksburg rounded text-sm px-6 py-3">Book a Consultation</Link>
                  <a href="tel:6016341812"
                    className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-6 py-3 rounded hover:bg-black hover:text-white transition-all text-sm">
                    <Phone className="h-4 w-4" /> (601) 634-1812
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    })}

    {/* CTA */}
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-black mb-4">Not Sure Which Service You Need?</h2>
        <p className="text-white/60 mb-8">Contact us for a comprehensive evaluation. Dr. Kenneth and Dr. Jonathan will develop a personalized treatment plan that fits your goals and your budget.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-vicksburg text-lg px-8 py-4 rounded inline-block">Request a Consultation</Link>
          <a href="tel:6016341812"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded border border-white/20 transition-all text-lg">
            <Phone className="h-5 w-5" /> (601) 634-1812
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
