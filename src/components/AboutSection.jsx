import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#E8E2D4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="/accountants.jpeg" 
            alt="Helping Hand Accountants"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#3E4A5C' }}>
            About Helping Hand Accountants
          </h2>
          <p className="text-lg mb-6" style={{ color: '#6B7D7D' }}>
            With over a decade of experience, we’ve been empowering individuals and small businesses across Malawi and beyond with trusted, efficient, and affordable accounting solutions.
          </p>
          <p className="text-base" style={{ color: '#6B7D7D' }}>
            Whether you're a startup or a growing enterprise, our team of experts provides personal and professional assistance tailored to your financial goals. Let us handle the numbers while you focus on what you do best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
