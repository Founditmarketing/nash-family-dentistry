import { Section, Card, Button } from '../components/ui-elements';
import { Award, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
  const kenNashAffiliations = [
    'American Academy of Cosmetic Dentistry (AACD)',
    'Mississippi Dental Association',
    'American Dental Association (ADA)',
    'Academy of General Dentistry (AGD)',
    'World Clinical Laser Institute (WCLI)',
    'Mississippi Dental Society',
    'National Dental Association',
    'Dental Organization for Conscious Sedation (DOCS)'
  ];

  return (
    <div id="about-page">
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">Two Generations. One Mission.</h1>
          <p className="text-xl md:text-2xl text-accent font-semibold uppercase tracking-widest leading-relaxed">Changing Lives One Smile At A Time</p>
        </div>
      </div>

      {/* Practice Story */}
      <Section id="practice-story">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">The Nash Family Legacy</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Founded on a vision of exceptional cosmetic and restorative care, Nash Family Dentistry has been serving Vicksburg and its surrounding areas for more than 40 years. Our practice was built on a simple yet profound foundation: trust, transparency, and treating every patient as if they were a member of our own family.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              From the moment you walk through our doors, you'll feel the difference of a "patient-first" atmosphere. We believe in an explanation-first approach, ensuring you are fully informed and comfortable with every step of your dental journey.
            </p>
          </div>
          <div className="relative">
            <img src="/images/office-broll.jpg" alt="Nash Family Dentistry Team" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </Section>

      {/* Dr. Kenneth Nash */}
      <Section id="ken-nash" bg="gray">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
             <img src="/images/dr-kenneth.jpg" alt="Dr. Kenneth D. Nash" className="rounded-lg shadow-xl mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
             <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
                <h4 className="font-bold text-primary flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Education
                </h4>
                <ul className="text-sm space-y-2 text-charcoal/70">
                    <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-1" />
                        DDS, Meharry Medical College School of Dentistry (1980)
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-1" />
                        B.S. in Biology, Tulane University (1976)
                    </li>
                </ul>
             </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">Dr. Kenneth D. Nash, DDS</h2>
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-6">Founder & Lead Dentist</p>
              <div className="prose max-w-none text-charcoal/80 space-y-4 leading-relaxed">
                <p>
                  With more than 40 years of experience, Dr. Kenneth Nash has established himself as a leader in general, cosmetic, and laser dentistry in Vicksburg. He founded Nash Family Dentistry with a commitment to staying at the forefront of dental technology to provide his patients with the most comfortable and effective care possible.
                </p>
                <p>
                  Dr. Nash is a Certified Lumineers Dentist and has completed advanced training in laser periodontics and dental implants. His expertise allows his patients to receive advanced surgical and restorative procedures in one familiar, trusted location.
                </p>

              </div>
            </div>
            
            <div>
               <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-accent" />
                  Professional Affiliations & Certifications
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {kenNashAffiliations.map((item) => (
                    <div key={item} className="flex items-center text-sm text-charcoal/80">
                         <CheckCircle2 className="h-4 w-4 mr-2 text-primary shrink-0" />
                         {item}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Dr. Jonathan Nash */}
      <Section id="jon-nash">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 order-2 md:order-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">Dr. Jonathan Nash, DDS</h2>
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-6">Associate Dentist</p>
              <div className="prose max-w-none text-charcoal/80 space-y-4 leading-relaxed">
                <p>
                  Dr. Jonathan Nash joined his father's practice in 2016, bringing a fresh perspective and specialized training in modern dental technologies. He is passionate about minimally invasive dentistry and utilizes CEREC same-day crown technology to increase convenience and precision for his patients.
                </p>
                <p>
                  Beyond his clinical excellence, Dr. Jonathan is deeply committed to community service. He is BLS/ACLS certified and has undergone specialized training in rapid HIV testing. His holistic approach to patient care ensures that the practice remains a safe, welcoming, and advanced environment for all generations of patients.
                </p>

              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-warm-gray rounded-lg">
                    <h4 className="font-bold text-primary mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        Education & Residency
                    </h4>
                    <ul className="text-sm space-y-3 text-charcoal/70">
                        <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-1" />
                            DDS, Meharry Medical College School of Dentistry (2016)
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-1" />
                            AEGD Residency, University of Mississippi Medical Center
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-1" />
                            Master Degree in Biomedical Science
                        </li>
                    </ul>
                </div>
                <div className="p-6 bg-primary text-white rounded-lg">
                   <h4 className="font-bold mb-4 flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-accent" />
                        Specializations
                    </h4>
                    <ul className="text-sm space-y-3 opacity-90">
                        <li>• Minimally Invasive Dentistry</li>
                        <li>• CEREC Same-Day Crowns</li>
                        <li>• Family & Children's Dentistry</li>
                        <li>• Community Health Advocacy</li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="md:col-span-1 order-1 md:order-2">
             <img src="/images/dr-jonathan.jpg" alt="Dr. Jonathan Nash" className="rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section id="values" bg="charcoal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">Our Core Values</h2>
          <p className="text-accent uppercase tracking-widest font-semibold text-sm">What Drives Every Appointment</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Family Atmosphere', desc: 'Patients feel valued and heard, not like a number on a chart.' },
            { title: 'Trust & Transparency', desc: 'Long-lasting relationships built on open, honest communication.' },
            { title: 'Explanation-First', desc: 'Patients always know exactly what is happening and why.' },
            { title: 'Technology-Backed', desc: 'Minimally invasive lasers, digital X-rays, and CEREC for precision.' },
            { title: 'Comprehensive Care', desc: 'Implants, crowns, laser, cosmetic — all handled in one Vicksburg office.' },
            { title: 'Patient Comfort', desc: 'Sedation options and a gentle touch for a stress-free experience.' },
          ].map((v) => (
            <div key={v.title} className="p-8 border border-white/10 rounded-xl hover:border-accent transition-colors">
              <h3 className="text-xl font-bold text-accent mb-4">{v.title}</h3>
              <p className="text-gray-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technology & Office */}
      <Section id="office-tour">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary italic">Comfort Meets Technology</h2>
            <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">Explore our modern Vicksburg office, equipped with the latest diagnostic and treatment tools for your comfort and safety.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <img src="/images/crown-after.jpg" className="rounded-lg h-64 w-full object-cover shadow-md" alt="Waiting Room" />
             <img src="/images/pattern.jpg" className="rounded-lg h-64 w-full object-cover shadow-md" alt="Treatment Room" />
             <img src="/images/implants.jpg" className="rounded-lg h-64 w-full object-cover shadow-md" alt="Dental Technology" />
             <img src="/images/benefits.jpg" className="rounded-lg h-64 w-full object-cover shadow-md" alt="Patient Care" />
          </div>
      </Section>

      {/* CTA */}
      <div className="bg-primary py-16 text-center">
         <h2 className="text-3xl font-bold text-white mb-8 italic">Experience the Nash Family Difference</h2>
         <Button to="/contact" variant="gold" className="px-10 py-5 text-xl">Schedule Your Visit</Button>
      </div>
    </div>
  );
};

export default About;
