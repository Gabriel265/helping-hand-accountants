import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#3E4A5C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
          Let's Work Together
        </h2>
        <p className="text-lg mb-12" style={{ color: '#D3DDE6' }}>
          Get in touch with us today and see how we can support your accounting needs.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-white">
            <Mail size={20} />
            <a href="mailto:helpinghandtutor3@gmail.com" style={{ color: '#FFFFFF' }}>
              helpinghandtutor3@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Phone size={20} />
            <a href="tel:++447301096908" style={{ color: '#FFFFFF' }}>
              +44 730 1096 908
            </a>
          </div>
        </div>

        <a
          href="mailto:helpinghandtutor3@gmail.com"
          className="inline-block px-8 py-4 font-semibold rounded-full transition"
          style={{
            backgroundImage: 'linear-gradient(to right, #c54d42, #9e1b1b)',
            color: '#fff',
          }}
        >
          Send Us an Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
