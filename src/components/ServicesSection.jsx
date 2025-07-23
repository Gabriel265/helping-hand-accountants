import React, { useState } from 'react';
import { FileText, Percent, BarChart2, Briefcase, ChevronDown } from 'lucide-react';

const services = [
  {
    title: 'Accounting',
    description: 'Professional bookkeeping and financial management',
    icon: <FileText size={20} />,
    details: [
      'Complete accountancy work on computerized and manual records',
      'Preparation of financial statements',
      'Budgeting, cash flows & management accounts',
      'Financial controls and manual design',
      'Internal audits and financial reviews'
    ],
    bg: '#B5C0B7',
    iconBg: '#6FB3A0'
  },
  {
    title: 'Taxation',
    description: 'Expert tax preparation and planning services',
    icon: <Percent size={20} />,
    details: [
      'Tax planning advisory services',
      'PAYE, VAT, FBT & WHT returns',
      'Tax health checks and handling disputes',
      'Income tax computations and advice'
    ],
    bg: '#C9CDD1',
    iconBg: '#8FA68E'
  },
  {
    title: 'Capacity Building',
    description: 'Comprehensive internal audit and HR services',
    icon: <BarChart2 size={20} />,
    details: [
      'HR policy and procedure development',
      'Job evaluations and appraisals',
      'Recruitment and executive assessments',
      'CPDs and payroll management'
    ],
    bg: '#B5C0B7',
    iconBg: '#4A6741'
  },
  {
    title: 'Other Services',
    description: 'Company registration, software training and more',
    icon: <Briefcase size={20} />,
    details: [
      'Company and project management',
      'Inventory oversight',
      'Sage & QuickBooks trainings'
    ],
    bg: '#C9CDD1',
    iconBg: '#6FB3A0'
  }
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#E8E2D4' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 transform translate-x-24 -translate-y-24" style={{ backgroundColor: '#B5C0B7' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 border" style={{ backgroundColor: '#B5C0B7', borderColor: '#8FA68E' }}>
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: '#4A6741' }}>Explore</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#3E4A5C' }}>
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#6B7D7D' }}>
            Professional solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
            >
              {/* Card Content */}
              <div className="p-6 sm:p-8">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: service.bg }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: service.iconBg }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="font-bold text-lg mb-2 transition-colors" style={{ color: '#3E4A5C' }}>
                  {service.title}
                </h4>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7D7D' }}>
                  {service.description}
                </p>

                {/* Toggle Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center justify-between w-full text-left text-sm font-medium transition-colors group/btn"
                  style={{ color: '#4A6741' }}
                >
                  <span className="group-hover/btn:underline">View Details</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform duration-300 group-hover/btn:translate-x-1 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              </div>

              {/* Expandable Details */}
              <div
                className={`px-6 sm:px-8 overflow-hidden transition-all duration-500 ease-out ${
                  expandedIndex === index 
                    ? 'max-h-96 pb-6 sm:pb-8 opacity-100' 
                    : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <div className="border-t pt-4" style={{ borderColor: '#E8E2D4' }}>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li 
                        key={i}
                        className="flex items-start text-sm leading-relaxed transform transition-all duration-300"
                        style={{ 
                          color: '#6B7D7D',
                          transitionDelay: expandedIndex === index ? `${i * 50}ms` : '0ms'
                        }}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: service.iconBg }}
                        ></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: 'rgba(181, 192, 183, 0.05)' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;