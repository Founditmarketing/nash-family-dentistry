import { Section } from '../components/ui-elements';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy-page">
      <div className="bg-black text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-white/60">Nash Family Dentistry — Vicksburg, MS</p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8 text-charcoal/80">
          <p className="text-sm text-charcoal/50 uppercase tracking-widest font-semibold">Last Updated: 2025</p>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Commitment to Your Privacy</h2>
            <p>Nash Family Dentistry is committed to protecting the privacy of our patients and website visitors. This Privacy Policy explains how we collect, use, and protect any information you provide when visiting our website or contacting our office.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
            <p>We may collect the following information when you use our website:</p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li>Name, phone number, and email address submitted through our contact or appointment request form</li>
              <li>Preferred appointment date and service of interest</li>
              <li>General website usage data via analytics tools</li>
            </ul>
            <p className="mt-4">We do <strong>not</strong> collect sensitive health or insurance information through our website. All clinical information is handled securely within our office systems in compliance with HIPAA.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>To respond to appointment requests and patient inquiries</li>
              <li>To communicate about your upcoming appointment</li>
              <li>To improve our website and patient experience</li>
              <li>We do <strong>not</strong> sell or share your personal information with third parties for marketing purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">HIPAA Notice</h2>
            <p>Nash Family Dentistry complies with all applicable regulations of the Health Insurance Portability and Accountability Act (HIPAA). Your protected health information is handled confidentially. For our full HIPAA Notice of Privacy Practices, please contact our office directly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience and analyze site traffic. You may disable cookies in your browser settings, though some features may not function correctly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <div className="mt-4 p-6 bg-warm-gray rounded-xl border-l-4 border-vicksburg">
              <p className="font-bold text-black text-lg">Nash Family Dentistry</p>
              <p>1201 Mission Park Dr, Vicksburg, MS 39180</p>
              <p><a href="tel:6016341812" className="text-vicksburg font-semibold hover:underline">(601) 634-1812</a></p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Link to="/" className="text-vicksburg font-semibold hover:underline">← Back to Home</Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
