import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "We offer Accounting, Taxation and Internal Audit Services",
      image: "/accounting.jpeg"
    },
    {
      quote: "Inventory Management and Project Management Services Available as well",
      image: "/project.jpeg"
    },
    {
      quote: "Accounting Software Trainings, Human Resource and Payroll management, and training services also available",
      image: "/software.jpeg"
    },
    {
      quote: "We will also help you with company registration and many more.",
      image: "/company.jpeg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" style={{ backgroundColor: '#F8F6F0' }}>
      <main className="relative">
        <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url('${testimonials[currentSlide].image}')` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(46, 62, 82, 0.7)' }}></div>

          {/* Green Angular Decoration */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-28 lg:h-32 z-10">
            <div className="absolute bottom-0 left-0 w-full h-full transform origin-bottom-left skew-y-2" style={{ backgroundColor: '#8FA68E' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex-grow py-12 lg:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Text */}
              <div className="lg:col-span-7 xl:col-span-6 text-white">
                <div className="max-w-2xl">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 font-serif" style={{ color: '#688B87' }}>"</div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                    Helping Hand Accountants
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 font-light opacity-90">
                    We provide comprehensive accounting solutions to help your business thrive. 
                    From payroll management to financial planning, we're here to support your success 
                    with integrity and expertise.
                  </p>
                  <a 
                    href="#contacts"
                    className="inline-block px-6 py-3 rounded font-medium text-sm tracking-wide transition-all"
                    style={{
                      backgroundColor: '#8FA68E',
                      color: '#2E3E52',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#597165';
                      e.target.style.color = '#F8F6F0';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#8FA68E';
                      e.target.style.color = '#2E3E52';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    CONTACT US
                  </a>

                  <div className="mt-8 p-4 rounded-lg max-w-lg" style={{
                    backgroundColor: 'rgba(139, 166, 142, 0.15)',
                    border: '1px solid rgba(139, 166, 142, 0.3)'
                  }}>
                    <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed" style={{ color: '#8FA68E' }}>
                      "{testimonials[currentSlide].quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-center lg:items-end justify-center space-y-6">
                <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'scale-125' : 'hover:scale-110'
                      }`}
                      style={{
                        backgroundColor: index === currentSlide ? '#F8F6F0' : 'rgba(248, 246, 240, 0.4)'
                      }}
                      onMouseEnter={(e) => {
                        if (index !== currentSlide) e.target.style.backgroundColor = 'rgba(248, 246, 240, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        if (index !== currentSlide) e.target.style.backgroundColor = 'rgba(248, 246, 240, 0.4)';
                      }}
                    />
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={prevSlide}
                    className="p-3 rounded-full transition-all"
                    style={{ backgroundColor: 'rgba(139, 166, 142, 0.2)' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(139, 166, 142, 0.3)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(139, 166, 142, 0.2)'}
                  >
                    <ChevronLeft className="text-white w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-3 rounded-full transition-all"
                    style={{ backgroundColor: 'rgba(139, 166, 142, 0.2)' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(139, 166, 142, 0.3)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(139, 166, 142, 0.2)'}
                  >
                    <ChevronRight className="text-white w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="relative z-10">
            <div className="h-10 sm:h-12 md:h-14">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ fill: '#F8F6F0' }}>
                <path d="M0,60 C300,90 600,30 900,60 C1000,75 1100,45 1200,60 L1200,120 L0,120 Z" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
