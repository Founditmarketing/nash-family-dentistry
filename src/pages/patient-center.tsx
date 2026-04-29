import { Section, Card, Button } from '../components/ui-elements';
import { ShieldCheck, CreditCard, ClipboardCheck, Info } from 'lucide-react';

const PatientCenter = () => {
  return (
    <div id="patient-center-page">
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">Patient Center</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto italic font-medium">Resources and information for our new and existing patients.</p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Insurance */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
               <div className="p-3 bg-primary/10 rounded-lg">
                  <ShieldCheck className="h-8 w-8 text-primary" />
               </div>
               <h2 className="text-3xl font-bold text-primary italic">Insurance Information</h2>
            </div>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              We accept most major dental insurance carriers and are happy to process most dental claims in-office for your convenience. Our goal is to help you maximize your benefits while receiving the care you need.
            </p>
            <div className="bg-warm-gray p-8 rounded-xl border-l-4 border-primary">
                <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-primary">Insurance</h4>
                <p className="text-sm font-semibold">We accept most major dental insurance carriers and are happy to process claims in-office. Please call (601) 634-1812 to verify your specific coverage.</p>
            </div>
          </div>

          {/* Financing */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
               <div className="p-3 bg-accent/10 rounded-lg">
                  <CreditCard className="h-8 w-8 text-accent" />
               </div>
               <h2 className="text-3xl font-bold text-primary italic">Flexible Financing</h2>
            </div>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              We believe that cost should never be a barrier to achieving your best smile. Nash Family Dentistry offers a variety of flexible financing options to ensure you can receive treatment on a budget that works for you.
            </p>
            <div className="bg-warm-gray p-8 rounded-xl border-l-4 border-accent">
                <p className="text-sm font-semibold">We offer flexible payment plan options to help you fit treatment into your budget. Call (601) 634-1812 to discuss what works for you.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* New Patient Paperwork */}
      <Section bg="gray">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                 <div className="flex items-center space-x-4">
                    <ClipboardCheck className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold text-primary italic">New Patient Paperwork</h2>
                 </div>
                 <p className="text-lg text-charcoal/80 leading-relaxed">
                    Welcome to the family! To make your first visit as smooth as possible, we invite you to complete your new patient paperwork online via our secure portal. This saves you time in the waiting room and allows us to focus entirely on you during your appointment.
                 </p>
                 <Button to="https://app.nexhealth.com/appt/nash_family_dentistry" variant="primary" className="px-8 py-4 text-lg">
                    Access New Patient Portal
                 </Button>
             </div>
             <div className="bg-white p-10 rounded-2xl shadow-xl">
                 <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                    <Info className="h-6 w-6 mr-3 text-accent" />
                    What to Expect
                 </h3>
                 <ul className="space-y-4">
                    {[
                        'Comprehensive oral examination and digital X-rays',
                        'Personal consultation with Dr. Kenneth or Dr. Jonathan Nash',
                        'Discussion of your dental goals and oral health history',
                        'Clear explanation of any recommended treatment options',
                        'Review of insurance benefits and financing plans'
                    ].map((step, i) => (
                        <li key={i} className="flex items-start text-charcoal/80">
                            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 mt-0.5">{i+1}</span>
                            {step}
                        </li>
                    ))}
                 </ul>
             </div>
          </div>
      </Section>

      {/* FAQ Teaser */}
      <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary italic">Common Patient Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
             {[
                { q: "How early should I arrive for my first appointment?", a: "If you have completed your paperwork online, arriving 5-10 minutes before your scheduled time is perfect. If you need to fill it out in-office, please arrive 15 minutes early." },
                { q: "Do you treat children?", a: "Yes! We are a true family practice and serve patients from age 3 through adults." },
                { q: "What should I bring to my visit?", a: "Please bring your photo ID, insurance card (if applicable), and a list of any medications you are currently taking." },
             ].map((faq, i) => (
                <div key={i} className="p-6 bg-warm-gray rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Q: {faq.q}</h4>
                    <p className="text-charcoal/70">A: {faq.a}</p>
                </div>
             ))}
          </div>
      </Section>
    </div>
  );
};

export default PatientCenter;
