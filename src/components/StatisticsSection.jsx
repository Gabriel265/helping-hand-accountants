import React from 'react';

const stats = [
  { label: 'Satisfied Clients', value: 150 },
  { label: 'Projects Completed', value: 280 },
  { label: 'Years Experience', value: 7 },
  { label: 'Team Members', value: 15 },
];

const StatisticsSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#C9CDD1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#3E4A5C' }}>
          Why Choose Us?
        </h2>
        <p className="text-lg mb-12" style={{ color: '#6B7D7D' }}>
          We are trusted by thousands of clients and agencies. Here’s a quick look at our impact.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-5xl font-extrabold" style={{ color: '#4A6741' }}>
                {item.value}+
              </h3>
              <p className="text-base" style={{ color: '#3E4A5C' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
