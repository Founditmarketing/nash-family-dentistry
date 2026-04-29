import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, Button, Card } from '../components/ui-elements';
import { CheckCircle2, ArrowRight, Phone, Award, Zap, Smile, Stethoscope, CircleEllipsis, Baby } from 'lucide-react';

// All service content sourced from vicksburgdentist.com
const serviceData: Record<string, {
  id: string;
  title: string;
  subtitle: string;
  heroImg: string;
  icon: React.ElementType;
  intro: string;
  body: string[];
  subServices: { name: string; desc: string }[];
  faq: { q: string; a: string }[];
  cta: string;
}> = {
  implants: {
    id: 'implants',
    title: 'Dental Implants',
    subtitle: 'The permanent, gold-standard solution for missing teeth',
    heroImg: '/images/implants-2.jpg',
    icon: Award,
    intro: 'Dental implants are the most ideal long-term solution for missing teeth. Functioning just like natural teeth, implants provide superior aesthetics, restore full chewing function, and actively support long-term oral health.',
    body: [
      'At Nash Family Dentistry, our dentists complete all aspects of the implant treatment process in our Vicksburg office — from surgical placement to custom crown restoration. This means fewer appointments, a familiar environment, and care from a team you already trust.',
      'Dr. Kenneth Nash has over 40 years of experience placing and restoring implants. Guided by the latest imaging technology, he ensures precise placement for optimal stability and long-term success.',
      'Whether you need a single tooth replaced or are looking to stabilize an entire denture with implant anchors, we have a solution designed around your unique anatomy and goals. We also offer bone grafting when needed to ensure the best foundation for your implant.',
    ],
    subServices: [
      { name: 'Single Tooth Implants', desc: 'Replace a single missing tooth with a permanent, natural-looking implant and crown — no impact on adjacent teeth.' },
      { name: 'Implant Overdentures', desc: 'Stabilize a full or partial denture with implant anchors, dramatically improving fit, comfort, and chewing power.' },
      { name: 'Mini Dental Implants', desc: 'A narrower implant option requiring less bone density — an excellent solution for patients who may not qualify for standard implants.' },
      { name: 'Mini Implants for Lower Dentures', desc: 'A highly effective solution for stabilizing lower dentures, which are notoriously difficult to keep in place.' },
      { name: 'Bone Grafting', desc: 'If you\'ve lost bone density due to tooth loss or gum disease, bone grafting can rebuild the foundation needed for successful implant placement.' },
      { name: 'Failing Dental Implants', desc: 'If you\'ve experienced problems with a previous implant, our team has the expertise to evaluate and address implant failure.' },
    ],
    faq: [
      { q: 'Are dental implants painful?', a: 'Most patients report less discomfort than they expected. We use local anesthesia and can offer sedation options to ensure you\'re completely comfortable during the procedure. Post-procedure discomfort is typically manageable with over-the-counter pain relievers.' },
      { q: 'How long do dental implants last?', a: 'With proper care, dental implants can last a lifetime. The crown restoration on top may need replacement after 10–15 years, but the titanium implant itself is designed to be permanent.' },
      { q: 'Am I a candidate for dental implants?', a: 'Most adults with good general health and sufficient bone density are candidates. We\'ll evaluate you thoroughly during your consultation. If bone loss is a concern, bone grafting may be an option.' },
      { q: 'How much do dental implants cost?', a: 'Implant costs vary depending on case complexity, the number of implants needed, and whether bone grafting is required. We accept most insurance plans and offer flexible financing. Call (601) 634-1812 for a personalized estimate.' },
    ],
    cta: 'Schedule Your Implant Consultation',
  },
  cosmetic: {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    subtitle: 'World-class smile transformations from a Lumineers®-certified dentist',
    heroImg: '/images/smile-after-1.jpg',
    icon: Smile,
    intro: 'Cosmetic dentistry refers to any number of procedures concerned with the aesthetics of the smile. Dr. Nash is a member of the American Academy of Cosmetic Dentistry and a certified Lumineers® dentist — bringing artistry and precision to every smile transformation.',
    body: [
      'From subtle enhancements like professional whitening to complete smile makeovers using Lumineers® or Snap-On Smile®, our cosmetic offerings are designed to restore balance, harmony, and confidence to your smile and face.',
      'Dr. Kenneth Nash\'s decades of cosmetic experience, combined with cutting-edge materials and techniques, means you\'ll enjoy results that are both beautiful and long-lasting. Every cosmetic treatment begins with a thorough consultation to understand your goals and create a personalized plan.',
      'We believe that a beautiful smile starts from within — with healthy gums, properly aligned teeth, and the right restorations. Our comprehensive approach ensures your cosmetic results are built on a foundation of excellent oral health.',
    ],
    subServices: [
      { name: 'Lumineers®', desc: 'Ultra-thin, contact-lens-style veneers that require little to no tooth reduction. Dr. Nash is Lumineers Certified by Den-Mat Dental Labs.' },
      { name: 'Porcelain Veneers & Snap-On Smile®', desc: 'Custom-crafted porcelain shells that cover the front surface of teeth. Snap-On Smile® provides a reversible, removable option for immediate smile enhancement.' },
      { name: 'Full Mouth Reconstruction', desc: 'For patients needing comprehensive restorative and cosmetic work, we develop a full treatment plan to rebuild function, health, and beauty together.' },
      { name: 'Teeth Whitening', desc: 'Professional-grade whitening delivers dramatically brighter results than store-bought alternatives, safely and in far less time.' },
      { name: 'Dental Bonding', desc: 'A quick, cost-effective way to repair chips, cracks, or discoloration using tooth-colored composite resin.' },
      { name: 'Smile Makeovers', desc: 'A combination of cosmetic treatments coordinated to achieve a complete smile transformation tailored to your facial aesthetics and goals.' },
    ],
    faq: [
      { q: 'What is the difference between Lumineers® and traditional veneers?', a: 'Traditional veneers require removing a small amount of enamel before placement. Lumineers® are ultra-thin and often require no enamel removal at all, making them a reversible option for many patients.' },
      { q: 'How white can teeth whitening get?', a: 'Professional whitening can lighten teeth by several shades depending on the type and cause of staining. Intrinsic stains (inside the tooth) may respond differently than extrinsic (surface) stains. We\'ll assess your staining type and recommend the best approach.' },
      { q: 'How long do cosmetic results last?', a: 'Lumineers® and porcelain veneers typically last 10–20 years with proper care. Whitening results last 1–3 years depending on diet and habits. Bonding typically lasts 5–10 years.' },
    ],
    cta: 'Schedule Your Cosmetic Consultation',
  },
  laser: {
    id: 'laser',
    title: 'Laser Dentistry',
    subtitle: 'Scalpel-free, virtually painless care with faster recovery',
    heroImg: '/images/laser.jpg',
    icon: Zap,
    intro: 'Laser dentistry allows our dentists to provide scalpel-free care for both cosmetic and functional concerns. Dr. Kenneth Nash has completed Advanced Laser Periodontics Training — bringing state-of-the-art laser technology to Vicksburg for over two decades.',
    body: [
      'Utilizing the power of targeted laser light, we can perform safe and comfortable procedures that are virtually painless and promote a quick patient recovery. Many laser procedures require no sutures, minimal anesthesia, and carry a significantly lower risk of infection than traditional surgical approaches.',
      'Laser dentistry is particularly powerful for treating gum disease — one of the most common and serious oral health conditions. Instead of cutting, lasers vaporize diseased tissue with pinpoint precision, leaving healthy tissue untouched.',
      'If you\'ve been anxious about dental procedures or have avoided treatment due to fear of pain or recovery time, laser dentistry may be the solution that finally makes dental care feel approachable.',
    ],
    subServices: [
      { name: 'Gum Disease Treatment (Laser)', desc: 'Advanced laser periodontal therapy targets and removes infected tissue with precision, promoting healthy gum reattachment and reducing pocket depth without scalpels.' },
      { name: 'Soft Tissue Recontouring', desc: 'Also called a "gum lift," laser recontouring reshapes the gum line to create a more balanced, aesthetically pleasing smile — often in a single visit.' },
      { name: 'TMJ Treatment', desc: 'Laser therapy can help reduce inflammation and pain associated with temporomandibular joint disorder, providing lasting relief for jaw pain and headaches.' },
      { name: 'Periodontal Maintenance', desc: 'Ongoing laser-assisted periodontal maintenance keeps gum disease in remission, protecting your teeth and supporting bone health long-term.' },
      { name: 'Frenectomies', desc: 'A laser frenectomy releases a tight labial or lingual frenum quickly and comfortably — ideal for both infants with tongue-tie and adults with cosmetic or functional concerns.' },
      { name: 'Gingivectomies', desc: 'Laser removal of excess or diseased gum tissue. Faster healing and less discomfort compared to traditional surgical methods.' },
    ],
    faq: [
      { q: 'Does laser dentistry hurt?', a: 'Most laser procedures require little to no anesthesia and are described by patients as far more comfortable than traditional approaches. There is minimal bleeding and faster healing.' },
      { q: 'Is laser dentistry safe?', a: 'Absolutely. The lasers used in dentistry are FDA-cleared and have been safely used for decades. Dr. Nash has completed advanced training in laser periodontics to ensure the highest standard of care.' },
      { q: 'Am I a candidate for laser gum treatment?', a: 'Most patients with gum disease, a gummy smile, or soft tissue concerns are excellent candidates for laser treatment. We\'ll evaluate your situation during your consultation.' },
    ],
    cta: 'Learn More About Laser Dentistry',
  },
  general: {
    id: 'general',
    title: 'General & Restorative Dentistry',
    subtitle: 'Comprehensive care to protect, restore, and preserve your smile',
    heroImg: '/images/crown-after.jpg',
    icon: Stethoscope,
    intro: 'General and restorative dentistry forms the foundation of a healthy smile. From preventive cleanings to CEREC same-day crowns, Nash Family Dentistry provides the full spectrum of essential care in one familiar, trusted location.',
    body: [
      'We believe prevention is the most powerful tool in dentistry. Regular cleanings and exams allow our team to catch problems early — before they become costly or complex. When restorative treatment is needed, we use only the highest-quality materials and techniques for results that are both beautiful and durable.',
      'Dr. Jonathan Nash is certified in CEREC technology, meaning patients needing a crown can often receive a permanent, precision-milled restoration in a single visit. No temporaries. No second appointment. Just one comfortable visit and a beautiful result.',
      'For patients with dental anxiety, we offer multiple sedation options including nitrous oxide (laughing gas) and oral sedation, ensuring that necessary care never feels out of reach.',
    ],
    subServices: [
      { name: 'Dental Cleanings & Exams', desc: 'Professional cleanings and thorough exams form the cornerstone of preventive care. We recommend visits every 6 months for most patients.' },
      { name: 'CEREC Same-Day Crowns', desc: 'Dr. Jonathan Nash uses CEREC technology to design, mill, and place a permanent ceramic crown in a single appointment. No temporaries. No second visit.' },
      { name: 'Root Canals', desc: 'Root canal therapy relieves the pain of an infected or abscessed tooth and saves it from extraction. Modern techniques make root canals far more comfortable than their reputation suggests.' },
      { name: 'Crowns & Bridges', desc: 'Porcelain crowns restore strength and appearance to damaged teeth. Bridges replace one or more missing teeth using adjacent teeth for support.' },
      { name: 'Composite Dental Fillings', desc: 'Tooth-colored composite resin fillings are virtually invisible and bond directly to the tooth, requiring less removal of healthy tooth structure than traditional amalgam.' },
      { name: 'Dental Sealants', desc: 'Thin plastic coatings applied to the chewing surfaces of back teeth to prevent cavities. Especially effective for children but beneficial for adults too.' },
      { name: 'Sedation Dentistry', desc: 'We offer nitrous oxide and oral sedation to help anxious patients receive the care they need in a relaxed, comfortable state.' },
      { name: 'Frenectomies', desc: 'Surgical release of a tight frenum using either traditional or laser techniques. Can address tongue-tie, lip-tie, and related speech or nursing issues.' },
    ],
    faq: [
      { q: 'How often should I come in for cleanings?', a: 'For most patients, every 6 months is ideal. Patients with a history of gum disease may benefit from more frequent visits — typically every 3–4 months.' },
      { q: 'How long does a CEREC crown take?', a: 'The entire process — from preparation to final placement — typically takes 1–2 hours in a single visit. No temporaries, no return appointments.' },
      { q: 'Is a root canal painful?', a: 'With modern anesthesia and techniques, root canal treatment is generally no more uncomfortable than getting a filling. Most patients are pleasantly surprised by how manageable it is.' },
    ],
    cta: 'Schedule Your Appointment',
  },
  dentures: {
    id: 'dentures',
    title: 'Dentures',
    subtitle: 'Restore your smile, confidence, and quality of life',
    heroImg: '/images/benefits.jpg',
    icon: CircleEllipsis,
    intro: 'Modern dentures are more comfortable, natural-looking, and functional than ever before. Whether you need to replace a few teeth or a full arch, Nash Family Dentistry offers custom-fit denture solutions designed to restore your smile and your quality of life.',
    body: [
      'We take a thorough and personalized approach to denture care, beginning with a comprehensive evaluation to determine the best solution for your anatomy, lifestyle, and goals. Our team guides you through every step — from impressions and fitting to delivery, adjustment, and long-term care.',
      'For patients who want the most stable, functional denture experience possible, we also offer implant-supported and implant-stabilized options. Anchored by dental implants, these dentures eliminate the slipping and discomfort that traditional dentures can cause.',
      'If you\'ve been living without teeth or struggling with an ill-fitting denture, we can help. Our priority is restoring your ability to eat, speak, and smile with confidence.',
    ],
    subServices: [
      { name: 'Complete Dentures', desc: 'Full upper or lower arch replacements for patients who have lost all their teeth. Custom-fabricated for fit, function, and a natural appearance.' },
      { name: 'Partial Dentures', desc: 'Replace multiple missing teeth when some natural teeth remain. Partial dentures clip onto existing teeth for stability while restoring your smile.' },
      { name: 'Denture Stabilization', desc: 'Improve the fit and function of an existing denture using implant anchors. Dramatically reduces slipping, discomfort, and the need for adhesives.' },
      { name: 'Implant-Supported Dentures', desc: 'The most stable denture option available. Multiple implants support a full arch restoration that functions more like natural teeth than traditional dentures.' },
      { name: 'Denture Care & Maintenance', desc: 'Proper care extends the life of your denture and protects your oral health. We provide complete guidance on daily cleaning, storage, and when to come in for adjustments.' },
      { name: 'Candidacy Assessment', desc: 'Not sure if dentures are right for you? We\'ll evaluate your oral health, bone density, and lifestyle to recommend the best tooth replacement solution.' },
    ],
    faq: [
      { q: 'How long does it take to get dentures?', a: 'The process typically involves several appointments over a few weeks: impressions, a trial fitting, and final delivery. We ensure a precise fit before finalizing your denture.' },
      { q: 'Will dentures affect how I speak or eat?', a: 'There is an adjustment period, typically 2–4 weeks, as you adapt to speaking and eating with your new denture. Implant-stabilized dentures tend to have a much shorter adjustment period.' },
      { q: 'How long do dentures last?', a: 'With proper care, dentures last 5–10 years on average. Over time, the shape of your jaw changes, so periodic relining or replacement is necessary for proper fit.' },
    ],
    cta: 'Schedule a Denture Consultation',
  },
  family: {
    id: 'family',
    title: 'Family Dentistry',
    subtitle: 'Gentle, welcoming care for every member of your family — ages 3 to adult',
    heroImg: '/images/office-broll.jpg',
    icon: Baby,
    intro: 'Nash Family Dentistry is a true family practice — one that has served multiple generations of Vicksburg families since 1998. We provide gentle, compassionate care for patients of all ages, creating positive dental experiences that establish a lifetime of healthy habits.',
    body: [
      'We recommend a child\'s first dental visit by age 3, or when their first tooth appears. Early visits help children build comfort with the dental environment, allow us to monitor development, and establish the preventive habits that protect against cavities and orthodontic issues.',
      'Our patient-first approach means we never rush a young patient, always explain procedures in age-appropriate terms, and prioritize making every visit a positive experience. We want your children to grow up looking forward to their dental appointments — not dreading them.',
      'For adult family members, we offer the full range of general, cosmetic, restorative, and laser dental services. No referrals needed for most procedures — we handle it all in-house, saving your family time and maintaining continuity of care.',
    ],
    subServices: [
      { name: 'Children\'s First Dental Visits', desc: 'We recommend first visits by age 3. Our gentle, child-friendly approach builds trust from the very first appointment.' },
      { name: 'Comprehensive Exams', desc: 'Thorough exams for patients of all ages — including digital X-rays, oral cancer screening, and a detailed treatment discussion.' },
      { name: 'Professional Cleanings', desc: 'Regular cleanings remove tartar buildup that brushing can\'t reach and give us the opportunity to monitor your oral health closely.' },
      { name: 'Dental Sealants', desc: 'Thin protective coatings applied to the chewing surfaces of back teeth. Especially effective at preventing cavities in children.' },
      { name: 'Fluoride Treatments', desc: 'Professional fluoride strengthens enamel and helps prevent cavities — an especially valuable tool for growing children.' },
      { name: 'Orthodontic Assessments', desc: 'We can evaluate alignment concerns and refer to orthodontic specialists when braces or aligners may be beneficial.' },
    ],
    faq: [
      { q: 'When should my child first visit a dentist?', a: 'We recommend a child\'s first visit by age 3, or when their first tooth comes in. Early visits build comfort and catch any developmental concerns early.' },
      { q: 'Do you treat adults and children in the same office?', a: 'Yes — we are a true family practice serving patients from age 3 through adulthood, all in one comfortable, familiar office.' },
      { q: 'How do I prepare my child for their first dental visit?', a: 'Talk positively about the dentist and avoid using words like "hurt" or "shot." Let them know the dentist is going to count and clean their teeth. We do the rest — our team is experienced with nervous young patients.' },
    ],
    cta: 'Schedule for the Whole Family',
  },
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-primary">Service Not Found</h1>
          <p className="text-charcoal/60">The service you're looking for doesn't exist.</p>
          <Button to="/services" variant="primary">View All Services</Button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div id={`service-${service.id}-page`}>
      {/* Hero */}
      <div className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden">
        <img src={service.heroImg} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent text-charcoal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
            <IconComponent className="h-4 w-4" /> Nash Family Dentistry
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{service.title}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{service.subtitle}</p>
        </div>
      </div>

      {/* Intro */}
      <Section id={`${service.id}-intro`}>
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl text-charcoal/80 leading-relaxed font-semibold">{service.intro}</p>
            {service.body.map((para, i) => (
              <p key={i} className="text-charcoal/70 leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="space-y-6">
            <Card className="p-8 border-0 shadow-xl bg-primary text-white">
              <h3 className="font-bold text-xl mb-4 text-accent">Ready to Get Started?</h3>
              <p className="opacity-80 text-sm mb-6 leading-relaxed">Call our Vicksburg office or request an appointment online. We'll find a time that works for you.</p>
              <Button to="/contact" variant="gold" className="w-full mb-4">Request Appointment</Button>
              <a href="tel:6016341812" className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-semibold transition-colors">
                <Phone className="h-4 w-4" /> (601) 634-1812
              </a>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h4 className="font-bold text-primary mb-3 uppercase tracking-widest text-xs">Also at Nash Family Dentistry</h4>
              <ul className="space-y-2">
                {Object.values(serviceData).filter(s => s.id !== service.id).map(s => (
                  <li key={s.id}>
                    <Link to={`/services`} className="flex items-center text-sm text-charcoal/70 hover:text-primary transition-colors font-medium">
                      <ArrowRight className="h-3 w-3 mr-2 text-accent" /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Sub-services */}
      <Section bg="gray" id={`${service.id}-subservices`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary italic">What We Offer</h2>
          <p className="text-charcoal/60 mt-3 max-w-2xl mx-auto">Our {service.title.toLowerCase()} services cover every aspect of your care, all in our Vicksburg office.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.subServices.map((sub) => (
            <Card key={sub.name} className="p-6 border-0 shadow-md h-full">
              <CheckCircle2 className="h-6 w-6 text-accent mb-3" />
              <h3 className="font-bold text-primary mb-2">{sub.name}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{sub.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id={`${service.id}-faq`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center italic mb-12">Common Questions</h2>
          <div className="space-y-6">
            {service.faq.map((item) => (
              <div key={item.q} className="bg-warm-gray rounded-xl p-6">
                <h3 className="font-bold text-primary mb-3 text-lg">Q: {item.q}</h3>
                <p className="text-charcoal/70 leading-relaxed">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="charcoal">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold italic">{service.cta}</h2>
          <p className="text-gray-400">Call our Vicksburg office or request an appointment online. Dr. Kenneth and Dr. Jonathan Nash are ready to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="gold" className="px-8 py-4 text-lg">Book Appointment</Button>
            <Button to="tel:6016341812" variant="outline" className="px-8 py-4 text-lg !border-white !text-white hover:!bg-white/10">Call (601) 634-1812</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetail;
