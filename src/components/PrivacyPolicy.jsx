import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
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
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#E8E2D4]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-[#3E4A5C]/80 max-w-3xl mx-auto leading-relaxed">
            Helping Hand Accountants respects your privacy and is committed to protecting your personal data. 
            This privacy policy explains how we handle your information when you visit our website.
          </p>
        </div>

        {/* Policy sections */}
        <div className="space-y-8 sm:space-y-12">
          {/* Section 1 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#E8E2D4]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="mb-4 text-[#3E4A5C]/90 leading-relaxed">
                  We collect information that helps us provide better services to you:
                </p>
                <div className="grid gap-3 sm:gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Contact details (name, email, phone number)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Financial and transaction data for our services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Usage data from our website interactions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <span className="text-[#E8E2D4] font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="mb-4 text-[#3E4A5C]/90 leading-relaxed">
                  We use your data responsibly to deliver our services effectively:
                </p>
                <div className="grid gap-3 sm:gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Provide and manage our accounting services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Communicate with you regarding inquiries or services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Comply with legal and regulatory obligations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#E8E2D4]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Data Sharing and Security</h2>
                <div className="space-y-4">
                  <p className="text-[#3E4A5C]/90 leading-relaxed">
                    <strong className="text-[#3E4A5C]">We do not sell your personal data.</strong> We only share your information with trusted third parties where necessary for service delivery, such as regulatory bodies or secure cloud storage providers.
                  </p>
                  <p className="text-[#3E4A5C]/90 leading-relaxed">
                    Your data is stored securely using industry-standard encryption and access is strictly limited to authorized personnel who require it for their duties.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#3E4A5C]/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3E4A5C] rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-[#E8E2D4]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Rights</h2>
                <p className="mb-4 text-[#3E4A5C]/90 leading-relaxed">
                  You maintain full control over your personal data and have the right to:
                </p>
                <div className="grid gap-3 sm:gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Access and review your personal data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Request corrections to inaccurate information</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#3E4A5C] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#3E4A5C]/90">Request deletion of your personal data</span>
                  </div>
                </div>
                <div className="bg-[#3E4A5C]/5 rounded-xl p-4 border-l-4 border-[#3E4A5C]">
                  <p className="text-[#3E4A5C]/90">
                    To exercise any of these rights, please contact us at{' '}
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

export default PrivacyPolicy;