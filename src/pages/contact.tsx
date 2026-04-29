import React, { useState } from 'react';
import { Section, Button, Card } from '../components/ui-elements';
import { Phone, MapPin, Clock, Send, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

// ⚠️ Replace 'YOUR_FORM_ID' with the client's actual Formspree form ID (e.g. xpwzjkqn)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/Nash+Family+Dentistry/@32.3410099,-90.8660773,17z/data=!4m13!1m5!8m4!1e1!2s101200508023517679675!3m1!1e1!3m6!1s0x8628e1cd938faf5f:0xcb601e9b4aa2f72c!8m2!3d32.3410054!4d-90.8638886!9m1!1b1?hl=en-US';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div id="contact-page">
      <div className="bg-black text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-white/60 max-w-2xl mx-auto">We'd love to hear from you. Book an appointment, ask a question, or just say hello.</p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Panel */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-8">Office Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-vicksburg/10 rounded-lg mr-6"><MapPin className="h-6 w-6 text-vicksburg" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-charcoal mb-1">Our Location</h4>
                    <p className="text-charcoal/70">1201 Mission Park Dr<br />Vicksburg, MS 39180</p>
                    <a href="https://maps.google.com/?q=Nash+Family+Dentistry+Vicksburg+MS" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center text-vicksburg font-semibold mt-2 text-sm hover:underline">
                      Get Directions <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-vicksburg/10 rounded-lg mr-6"><Phone className="h-6 w-6 text-vicksburg" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-charcoal mb-1">Phone</h4>
                    <a href="tel:6016341812" className="text-vicksburg font-bold text-xl hover:underline">(601) 634-1812</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-vicksburg/10 rounded-lg mr-6"><Clock className="h-6 w-6 text-vicksburg" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-charcoal mb-4">Office Hours</h4>
                    <div className="space-y-1 text-sm text-charcoal/80">
                      <p><span className="font-semibold">Monday – Thursday:</span> 8:00 AM – 5:30 PM</p>
                      <p><span className="font-semibold">Friday:</span> 8:00 AM – 12:00 PM <span className="italic text-xs opacity-70">(alternating)</span></p>
                      <p><span className="font-semibold">Saturday – Sunday:</span> Closed</p>
                    </div>
                    <p className="mt-3 text-xs italic text-charcoal/50">Call to confirm Friday availability: (601) 634-1812</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-charcoal text-white p-8 border-l-8 border-accent">
              <h3 className="text-2xl font-black mb-4">New Patient?</h3>
              <p className="opacity-80 mb-6">Save time by filling out your paperwork online before your first visit.</p>
              <Button to="https://app.nexhealth.com/appt/nash_family_dentistry" variant="gold" className="w-full">Open Patient Portal</Button>
            </Card>
          </div>

          {/* Form */}
          <div id="contact-form-container">
            <Card className="p-8 md:p-12 shadow-2xl border-0">
              <h2 className="text-3xl font-bold text-black mb-8">Request an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-charcoal mb-2">Full Name *</label>
                    <input id="contact-name" name="name" type="text" required value={formData.name} onChange={handleChange}
                      placeholder="Your full name" className="w-full p-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-bold text-charcoal mb-2">Phone Number *</label>
                    <input id="contact-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                      placeholder="(601) 000-0000" className="w-full p-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-bold text-charcoal mb-2">Email Address</label>
                  <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange}
                    placeholder="your@email.com" className="w-full p-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-bold text-charcoal mb-2">Service of Interest</label>
                  <select id="contact-service" name="service" value={formData.service} onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm bg-white">
                    <option value="">Select a service...</option>
                    <option>Dental Implants</option>
                    <option>Cosmetic Dentistry / Lumineers®</option>
                    <option>Laser Dentistry</option>
                    <option>General & Restorative</option>
                    <option>Dentures</option>
                    <option>Family / Children's Dentistry</option>
                    <option>Teeth Whitening</option>
                    <option>Routine Cleaning & Exam</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-date" className="block text-sm font-bold text-charcoal mb-2">Preferred Date</label>
                  <input id="contact-date" name="date" type="date" value={formData.date} onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-charcoal mb-2">Message</label>
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange}
                    rows={4} placeholder="Tell us a little bit about what you're looking for..."
                    className="w-full p-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="font-semibold">Thank you! We'll be in touch shortly.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="font-semibold">Something went wrong. Please call us at (601) 634-1812.</p>
                  </div>
                )}
                <button type="submit" disabled={submitStatus === 'submitting'}
                  className="w-full bg-primary text-white font-bold py-5 rounded-md hover:bg-primary/90 transition-all shadow-xl active:scale-95 flex items-center justify-center text-lg uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitStatus === 'submitting' ? 'Sending...' : (<>Send Message <Send className="ml-3 h-5 w-5" /></>)}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* Google Maps Embed */}
      <div className="w-full h-96 bg-gray-200 relative overflow-hidden">
        <iframe title="Nash Family Dentistry Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.4!2d-90.8660773!3d32.3410099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8628e1cd938faf5f%3A0xcb601e9b4aa2f72c!2sNash%20Family%20Dentistry!5e0!3m2!1sen!2sus!4v1680000000000"
          className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>

      {/* Google Reviews CTA */}
      <div className="bg-warm-gray py-12 text-center border-t border-gray-200">
        <p className="text-charcoal/70 mb-4 font-medium">Happy with your experience at Nash Family Dentistry?</p>
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-md hover:bg-primary/90 transition-all active:scale-95 shadow-md">
          ⭐ Leave Us a Google Review
        </a>
      </div>
    </div>
  );
};

export default Contact;
