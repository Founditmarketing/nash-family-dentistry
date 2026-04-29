import { useState } from 'react';
import type React from 'react';
import { Section, Button } from '../components/ui-elements';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    category: 'General & New Patients',
    items: [
      { q: 'Are you accepting new patients?', a: 'Yes! Nash Family Dentistry warmly welcomes new patients of all ages. You can call us at (601) 634-1812 or submit a request through our Contact page.' },
      { q: 'How early should I arrive for my first appointment?', a: 'If you\'ve completed your paperwork online via our NexHealth portal, arriving 5–10 minutes before your scheduled time is perfect. If you need to fill out paperwork in-office, please arrive 15 minutes early.' },
      { q: 'What should I bring to my first visit?', a: 'Please bring a valid photo ID, your insurance card (if applicable), and a list of any current medications. If you\'ve completed your new patient paperwork online, that\'s all you need.' },
      { q: 'Do you treat children?', a: 'Yes — we are a true family practice serving patients from age 3 through adulthood, all in our comfortable Vicksburg office.' },
      { q: 'What are your office hours?', a: 'Monday through Thursday: 8:00 AM – 5:30 PM. Friday: 8:00 AM – 12:00 PM (alternating Fridays — please call to confirm). Saturday and Sunday: Closed. Call (601) 634-1812 for scheduling.' },
    ],
  },
  {
    category: 'Dental Implants',
    items: [
      { q: 'How much do dental implants cost at Nash Family Dentistry?', a: 'Cost varies depending on case complexity, number of implants, and whether bone grafting is needed. We accept most insurance plans and offer flexible financing. Call (601) 634-1812 for a personalized estimate.' },
      { q: 'Does Dr. Nash place and restore implants in the same office?', a: 'Yes. Our dentists complete all aspects of the implant process in our Vicksburg office — including surgical placement and custom crown restoration. This means fewer appointments and continuity of care.' },
      { q: 'How long do dental implants last?', a: 'With proper care, dental implants are designed to last a lifetime. The crown may need replacement after 10–15 years, but the implant itself is a permanent solution.' },
      { q: 'Are dental implants painful?', a: 'Most patients report less discomfort than expected. We use local anesthesia and can offer sedation options for your comfort. Post-procedure discomfort is typically manageable with over-the-counter pain relievers.' },
    ],
  },
  {
    category: 'Cosmetic Dentistry',
    items: [
      { q: 'Is Dr. Nash a Lumineers® certified dentist?', a: 'Yes. Dr. Kenneth Nash is a certified Lumineers® dentist through Den-Mat Dental Labs and the Lumineer Smile Discovery Program, and a member of the American Academy of Cosmetic Dentistry (AACD).' },
      { q: 'What is the difference between Lumineers® and regular veneers?', a: 'Traditional porcelain veneers require removing a thin layer of enamel before placement. Lumineers® are ultra-thin and often require no enamel reduction at all — making them a reversible option for many patients.' },
      { q: 'How long does professional whitening last?', a: 'Professional whitening typically lasts 1–3 years depending on your diet, habits like coffee or wine consumption, and oral hygiene. Touch-up treatments can extend results.' },
      { q: 'What is Snap-On Smile®?', a: 'Snap-On Smile® is a removable, non-invasive dental arch that fits over your existing teeth to instantly improve your smile\'s appearance. It\'s a great option for patients not ready for permanent cosmetic work.' },
    ],
  },
  {
    category: 'Laser Dentistry',
    items: [
      { q: 'What can laser dentistry treat?', a: 'Laser dentistry at Nash Family Dentistry is used for gum disease treatment, soft tissue recontouring (gum lifts), TMJ therapy, periodontal maintenance, frenectomies, and gingivectomies.' },
      { q: 'Does laser dentistry hurt?', a: 'Most laser procedures require little to no anesthesia. Patients typically describe the experience as far more comfortable than traditional surgical approaches, with minimal bleeding and faster recovery.' },
      { q: 'Is Dr. Nash trained in laser dentistry?', a: 'Yes. Dr. Kenneth Nash has completed Advanced Laser Periodontics Training from Lawrence Nurin, DDS, and Steward Rosenberg, DDS, and has used laser technology in his practice for over two decades.' },
    ],
  },
  {
    category: 'Insurance & Financing',
    items: [
      { q: 'Do you accept dental insurance?', a: 'We accept most major dental insurance carriers and will process your claims in-office for your convenience. Please call (601) 634-1812 to verify your specific coverage before your appointment.' },
      { q: 'What if I don\'t have dental insurance?', a: 'We offer flexible financing and payment plan options. We can help you find an option that fits your budget so cost is never a barrier to great care. Call (601) 634-1812 for details.' },
      { q: 'Do you offer any current promotions?', a: 'Contact our office directly at (601) 634-1812 for current promotions and pricing information.' },
    ],
  },
  {
    category: 'Technology & Sedation',
    items: [
      { q: 'What is CEREC same-day crown technology?', a: 'CEREC is a computer-aided design and manufacturing system that allows Dr. Jonathan Nash to design, mill, and place a permanent ceramic crown in a single appointment — usually 1–2 hours. No temporaries, no second visit.' },
      { q: 'Do you offer sedation dentistry?', a: 'Yes. We offer nitrous oxide (laughing gas) and oral conscious sedation to help anxious patients relax during treatment. Dr. Kenneth Nash holds an Enteral Conscious Sedation Permit from the Mississippi State Board of Dental Examiners.' },

    ],
  },
];

const FaqItem = ({ q, a }: { key?: React.Key; q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-gray-100 rounded-xl overflow-hidden transition-shadow ${open ? 'shadow-md' : 'shadow-sm'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-warm-gray transition-colors"
        aria-expanded={open}
      >
        <span className="font-bold text-charcoal pr-6">{q}</span>
        {open
          ? <ChevronUp className="h-5 w-5 text-vicksburg shrink-0" />
          : <ChevronDown className="h-5 w-5 text-vicksburg shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white">
          <p className="text-charcoal/70 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div id="faq-page">
      <div className="bg-black text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h1>
          <p className="text-white/60 max-w-2xl mx-auto">Everything you need to know about visiting Nash Family Dentistry in Vicksburg, MS.</p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto space-y-16">
          {faqData.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold text-black mb-6 pb-3 border-b-2 border-vicksburg">{cat.category}</h2>
              <div className="space-y-3">
                {cat.items.map((item, idx) => (
                  <FaqItem key={idx} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-black text-black">Still Have Questions?</h2>
          <p className="text-charcoal/70">Our friendly staff is happy to help. Call us during office hours or send a message through our contact form.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" className="px-8 py-4 text-lg">Contact Our Office</Button>
            <Button to="tel:6016341812" variant="outline" className="px-8 py-4 text-lg">Call (601) 634-1812</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQ;
