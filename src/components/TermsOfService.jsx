import React from 'react';
import { ArrowLeft, FileText, Scale, Copyright, AlertTriangle, XCircle } from 'lucide-react';

const TermsOfService = ({ onBack }) => {
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  return (
    <section className="min-h-screen bg-[#E8E2D4] text-[#3E4A5C]">
      {/* Header with back arrow */}
      <div className="sticky top-0 bg-[#E8E2D4]/95 backdrop-blur-sm border-b border-[#3E4A5C]/10 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-[#3E4A5C] hover:text-[#2A3441] transition-colors duration-200 group"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#3E4A5C] rounded-2xl mb-6">
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#E8E2D4]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-[#3E4A5C]/80 max-w-3xl mx-auto leading-relaxed">
            These terms of service govern your use of Helping Hand Accountants' website and services. 
            By accessing or using our services, you agree to be bound by these terms.
          </p>
        </div>

        {/* Terms sections */}
        <div className="space-y-8 sm:space-y-12">
          {/* Section 1 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#E8E2D4]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Use of Services</h2>
                <div className="space-y-4">
                  <p className="text-[#3E4A5C]/90 leading-relaxed">
                    You agree to use our services only for lawful purposes and in accordance with all applicable laws and regulations.
                  </p>
                  <div className="bg-[#3E4A5C]/5 rounded-xl p-4 border-l-4 border-[#3E4A5C]">
                    <p className="text-[#3E4A5C]/90 text-sm">
                      <strong className="text-[#3E4A5C]">Important:</strong> Any misuse of our services may result in immediate termination of access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <Copyright className="w-5 h-5 text-[#E8E2D4]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Intellectual Property</h2>
                <div className="space-y-4">
                  <p className="text-[#3E4A5C]/90 leading-relaxed">
                    All content on this website, including but not limited to text, graphics, logos, images, and software, 
                    is the exclusive property of Helping Hand Accountants and is protected by intellectual property laws.
                  </p>
                  <div className="grid gap-3 sm:gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#3E4A5C]/90">Unauthorized reproduction or distribution is strictly prohibited</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#3E4A5C]/90">Commercial use requires explicit written permission</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#3E4A5C]/90">Trademarks and service marks remain our property</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#E8E2D4]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Limitations of Liability</h2>
                <div className="space-y-4">
                  <p className="text-[#3E4A5C]/90 leading-relaxed">
                    While we strive to provide accurate and reliable services, Helping Hand Accountants shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
                  </p>
                  <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200/30">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#3E4A5C] font-semibold text-sm mb-1">Disclaimer</p>
                        <p className="text-[#3E4A5C]/80 text-sm">
                          Our liability is limited to the maximum extent permitted by applicable law. 
                          Users are advised to maintain appropriate insurance and backup procedures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <XCircle className="w-5 h-5 text-[#E8E2D4]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Termination</h2>
                <div className="space-y-4">
                  <p className="text-[#3E4A5C]/90 leading-relaxed">
                    We reserve the right to terminate or suspend access to our services at our sole discretion, 
                    with or without cause, and with or without prior notice.
                  </p>
                  <div className="grid gap-3 sm:gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#3E4A5C]/90">Violation of these terms may result in immediate termination</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#3E4A5C]/90">Upon termination, your right to use our services ceases immediately</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#3E4A5C]/90">Termination does not affect previously accrued obligations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Section - Contact for Questions */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="text-[#3E4A5C]/80 mb-4">
                If you have any questions or concerns about these Terms of Service, please don't hesitate to contact us.
              </p>
              <div className="bg-[#3E4A5C]/5 rounded-xl p-4 border-l-4 border-[#3E4A5C] inline-block">
                <p className="text-[#3E4A5C]/90">
                  Email us at{' '}
                  <a 
                    href="mailto:info@helpinghandaccountants.com" 
                    className="font-semibold text-[#3E4A5C] hover:underline transition-colors duration-200"
                  >
                    helpinghandtutor3@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#3E4A5C]/20 text-center">
          <div className="inline-flex items-center gap-2 text-[#3E4A5C]/70">
            <div className="w-2 h-2 bg-[#3E4A5C]/70 rounded-full"></div>
            <span className="text-sm sm:text-base">Last updated: July 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;