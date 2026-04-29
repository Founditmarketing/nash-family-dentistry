import { Section, Button } from '../components/ui-elements';
import { Star, MessageSquareQuote, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/Nash+Family+Dentistry/@32.3410099,-90.8660773,17z/data=!4m13!1m5!8m4!1e1!2s101200508023517679675!3m1!1e1!3m6!1s0x8628e1cd938faf5f:0xcb601e9b4aa2f72c!8m2!3d32.3410054!4d-90.8638886!9m1!1b1?hl=en-US';

const testimonials = [
  { name: 'Verified Google Patient', text: 'I would recommend Dr. Kenneth Nash and his son Dr. Jonathan Nash. They are very good at explaining what is going on and walking you through the process. I have always been satisfied with the work done on my teeth. It is a plus that they do root canals and implants right in the office!', rating: 5 },
  { name: 'Verified Google Patient', text: 'What a wonderful dentist and periodontist. Extremely happy with his service and bedside manner. Highly recommend.', rating: 5 },
];

const videoTestimonials = [
  { name: 'Joanne', subject: 'Lumineers®' },
  { name: 'Shambeni', subject: 'Laser Dentistry' },
  { name: 'Madison', subject: 'ClearCorrect Braces' },
  { name: 'Reggie', subject: 'Lumineers®' },
  { name: 'Cardell', subject: 'Teeth Whitening & Lumineers®' },
];

const Testimonials = () => {
  return (
    <div id="testimonials-page">
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Patient Testimonials</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Real stories from our valued patients in Vicksburg, MS.</p>
        </div>
      </div>

      <Section>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warm-gray px-6 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-accent fill-accent" />
            <span className="font-bold text-primary">Highly Rated on Google</span>
          </div>
          <h2 className="text-3xl font-black text-black">What Our Patients Are Saying</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg border border-gray-100 p-10 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <MessageSquareQuote className="absolute top-6 right-8 h-12 w-12 text-primary/10" />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-5 w-5 text-accent fill-accent" />)}
              </div>
              <p className="text-xl text-charcoal/80 leading-relaxed italic mb-8">"{t.text}"</p>
              <p className="font-bold text-primary tracking-widest uppercase text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-charcoal text-white p-12 rounded-3xl text-center shadow-2xl">
          <h3 className="text-2xl font-black mb-6">Share Your Experience</h3>
          <p className="opacity-70 mb-10 max-w-xl mx-auto">Your feedback helps us continue providing the best care possible. If you've enjoyed your visit, we'd love to hear from you on Google.</p>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-accent text-charcoal font-bold px-10 py-5 text-xl rounded-md hover:bg-accent/90 transition-all active:scale-95 shadow-lg">
            Leave a Google Review <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </Section>

      <Section bg="gray">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-black text-black mb-4">Watch Patient Testimonials</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">Hear directly from our patients about their experiences — from Lumineers® to Laser Dentistry.</p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe className="w-full h-full"
              src="https://www.youtube.com/embed/fZAHI5l9yjs"
              title="Nash Family Dentistry – Experience the Difference"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <h3 className="font-bold text-primary mb-6 text-center uppercase tracking-widest text-sm">More Video Stories on Our YouTube Channel</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {videoTestimonials.map((v) => (
                <a key={v.name} href="https://www.youtube.com/channel/UCa7ZWcXZtnLyatLfdhNPZUQ" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-warm-gray rounded-lg hover:bg-primary/5 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">{v.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-sm group-hover:text-primary transition-colors">{v.name}</p>
                    <p className="text-xs text-charcoal/50">{v.subject}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="py-12 text-center bg-white border-t">
        <Button to="/contact" variant="primary" className="px-10 py-5 text-xl">Schedule Your Visit</Button>
      </div>
    </div>
  );
};

export default Testimonials;
