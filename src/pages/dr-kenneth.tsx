import { Section, Button, Card } from '../components/ui-elements';
import { GraduationCap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// All content sourced directly from: https://www.vicksburgdentist.com/dr-kenneth-nash-vicksburg-ms/
const certifications = [
  'Enteral Conscious Sedation Permit — Mississippi State Board of Dental Examiners',
  'Lumineers Certified Dentist — Den-Mat Dental Labs & Lumineer Smile Discovery Program',
  'Advanced Laser Periodontics Training — Lawrence Nurin, DDS & Steward Rosenberg, DDS',
  'Basic and Advanced Training in Dental Life Support',
];

const affiliations = [
  'American Academy of Cosmetic Dentistry (AACD)',
  'American Dental Association (ADA)',
  'Academy of General Dentistry (AGD)',
  'World Clinical Laser Institute (WCLI)',
  'Mississippi Dental Association',
  'Mississippi Dental Society',
  'National Dental Association',
  'Dental Organization for Conscious Sedation (DOCS)',
];

const DrKenneth = () => {
  return (
    <div id="dr-kenneth-page">
      {/* Page Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Meet Your Dentist</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Kenneth D. Nash, DDS</h1>
          <p className="text-xl opacity-80 max-w-2xl">Founder of Nash Family Dentistry — delivering state-of-the-art dental care to Vicksburg, MS since 1998.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button to="/contact" variant="gold" className="px-8 py-4 text-lg">Schedule a Consultation</Button>
            <Link to="/about" className="inline-flex items-center text-white/80 hover:text-white font-semibold transition-colors">
              Meet Dr. Jonathan Nash <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bio + Photo */}
      <Section id="ken-bio">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          <div className="md:col-span-1 space-y-6">
            <img
              src="/images/dr-kenneth.jpg"
              alt="Dr. Kenneth D. Nash, DDS — Founder of Nash Family Dentistry"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
            />
            <Card className="p-6 bg-primary text-white border-0 shadow-xl">
              <h4 className="font-bold mb-4 text-accent uppercase tracking-widest text-xs">Quick Facts</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" /> 40+ years of clinical experience</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" /> Practice founded in Vicksburg, 1998</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" /> Lumineers® Certified Dentist</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" /> Certified Conscious Sedation Provider</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" /> Advanced Laser Periodontics Training</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" /> Implants placed & restored in-office</li>
              </ul>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Experience State-of-the-Art Dental Care</h2>
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-6">Founder &amp; Lead Dentist</p>
              <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  In 1998, Dr. Kenneth Nash opened Nash Family Dentistry to provide high-quality dental care to patients in Vicksburg, MS, and the surrounding communities. His advanced training and extensive experience allows him to offer a comprehensive range of dental services — from routine cleanings to complex full-mouth reconstructions — all under one trusted roof.
                </p>
                <p>
                  Dr. Nash is a proponent of technology-backed dental care, providing safe and predictable treatment that creates beautiful, long-lasting results. With a focus on total patient comfort, he offers multiple forms of sedation dentistry, including oral sedation and nitrous oxide, as well as minimally-invasive dental lasers that make procedures virtually painless.
                </p>
                <p>
                  His commitment to continuing education ensures that patients at Nash Family Dentistry always receive the most state-of-the-art techniques and technologies available. Dr. Nash cares deeply about his patients and works hard to create a comfortable, inviting atmosphere where every patient feels valued, heard, and respected.
                </p>

              </div>
            </div>

            {/* Education */}
            <div className="bg-warm-gray p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-accent" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-charcoal">Doctor of Dental Surgery (DDS)</p>
                    <p className="text-charcoal/70 text-sm">Meharry Medical College School of Dentistry, Nashville, TN — 1976 to 1980</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-charcoal">Bachelor of Science in Biology</p>
                    <p className="text-charcoal/70 text-sm">Tulane University, New Orleans, LA — 1976</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3 text-accent" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Affiliations */}
      <Section bg="gray" id="ken-affiliations">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 italic">Professional Affiliations</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {affiliations.map((a) => (
              <div key={a} className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <CheckCircle2 className="h-5 w-5 mr-3 text-accent shrink-0" />
                <span className="text-charcoal/80 font-medium text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="charcoal" id="ken-cta">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold italic">Ready to Experience the Nash Difference?</h2>
          <p className="text-gray-400 leading-relaxed">
            Dr. Kenneth Nash and the entire Nash Family Dentistry team are ready to welcome you. Whether you need a routine cleaning or a full smile transformation, we're here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="gold" className="px-8 py-4 text-lg">Book Your Appointment</Button>
            <Button to="tel:6016341812" variant="outline" className="px-8 py-4 text-lg !border-white !text-white hover:!bg-white/10">Call (601) 634-1812</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DrKenneth;
