import { Section, Button, Card } from '../components/ui-elements';
import { GraduationCap, Award, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// All content sourced from: vicksburgdentist.com/dr-jonathan-nash-vicksburg-ms/
const education = [
  { degree: 'AEGD Residency', school: 'University of Mississippi Medical Center', year: '2016–2017' },
  { degree: 'Doctor of Dental Surgery (DDS)', school: 'Meharry Medical College School of Dentistry, Nashville, TN', year: '2011–2016' },
  { degree: 'Master Degree in Biomedical Science', school: 'University of Mississippi Medical Center', year: '2009–2011' },
  { degree: 'Undergraduate Studies', school: 'Alcorn State University', year: '2005–2009' },
  { degree: 'Warren Central High School', school: 'Vicksburg, MS', year: '2005' },
];

const certifications = [
  'Rapid HIV Testing Certified',
  'BLS/ACLS Training Certified',
  'CEREC Same-Day Crown Technology Certified',
];

const specializations = [
  'Minimally Invasive Dentistry',
  'CEREC Same-Day Crowns',
  'Dental Implant Placement & Restoration',
  'Family & Children\'s Dentistry',
  'Community Health Advocacy',
  'Preventive & Family Care',
];

const DrJonathan = () => {
  return (
    <div id="dr-jonathan-page">
      <div className="bg-charcoal text-white py-20">
        <div className="container mx-auto px-4">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Meet Your Dentist</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Jonathan Nash, DDS</h1>
          <p className="text-xl opacity-80 max-w-2xl">Associate Dentist — dedicated to minimally-invasive, family-friendly care at Nash Family Dentistry in Vicksburg, MS.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button to="/contact" variant="gold" className="px-8 py-4 text-lg">Schedule a Consultation</Button>
            <Link to="/about" className="inline-flex items-center text-white/80 hover:text-white font-semibold transition-colors">
              Meet Dr. Kenneth Nash <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <Section id="jon-bio">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          <div className="md:col-span-2 order-2 md:order-1 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Dedicated to Minimally-Invasive Dental Care</h2>
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-6">Associate Dentist — Joined Practice 2016</p>
              <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  Dr. Jonathan Nash received his DDS degree from Meharry Medical College School of Dentistry in 2016 and completed his AEGD residency at the University of Mississippi Medical Center. He is the recipient of the prestigious <strong>Pamela C. and Frank S. Royal, Sr., M.D. Scholarship</strong> and holds a Master's Degree in Biomedical Science from UMMC.
                </p>
                <p>
                  Certified in rapid HIV testing and BLS/ACLS, Dr. Jonathan brings a holistic, community-first approach to every patient. He is also certified in <strong>CEREC same-day crown technology</strong> — allowing patients to receive permanent, precision-milled crowns in a single appointment with no temporaries.
                </p>
                <p>
                  Dr. Jonathan joined his father, Dr. Kenneth Nash, in 2016 and is passionate about minimally-invasive, patient-centered care for families throughout Vicksburg and surrounding Mississippi communities. An active volunteer locally and nationally, he brings that spirit of service to every chair.
                </p>

              </div>
            </div>

            <div className="bg-warm-gray p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-accent" />Education &amp; Training
              </h3>
              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.degree} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-charcoal">{e.degree}</p>
                      <p className="text-charcoal/70 text-sm">{e.school} &mdash; {e.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1 order-1 md:order-2 space-y-6">
            <img
              src="/images/dr-jonathan.jpg"
              alt="Dr. Jonathan Nash, DDS"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
            />
            <Card className="p-6 border-0 shadow-lg">
              <h4 className="font-bold text-primary mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-accent" /> Certifications
              </h4>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start text-sm text-charcoal/80">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section bg="gray" id="jon-specializations">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary italic mb-4">Areas of Focus</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">Dr. Jonathan's training and passion converge on making dentistry more accessible, comfortable, and effective for every patient.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {specializations.map((s) => (
              <div key={s} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start">
                <Heart className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                <span className="text-charcoal/80 font-semibold text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="charcoal" id="jon-cta">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Award className="h-12 w-12 text-accent mx-auto" />
          <h2 className="text-3xl font-bold italic">Pamela C. &amp; Frank S. Royal, Sr., M.D. Scholarship Recipient</h2>
          <p className="text-gray-400 leading-relaxed">Dr. Jonathan's academic excellence was recognized with one of Meharry Medical College's most prestigious scholarships — a testament to his dedication to dentistry and service.</p>
          <Button to="/contact" variant="gold" className="px-10 py-5 text-xl">Book with Dr. Jonathan</Button>
        </div>
      </Section>
    </div>
  );
};

export default DrJonathan;
