
import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import DateChooserModal from './DateChooserModal';

const Certificate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto bg-[#0b1220] border border-[#2b3447] rounded-2xl shadow-2xl overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-500">
      {/* Date Chooser Modal */}
      <DateChooserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Top Gold Accent */}
      <div className="h-1.5 gold-shimmer"></div>

      <div className="p-6 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#f8fafc] mb-2 uppercase">
            {EXPERIENCE_DATA.title}
          </h2>
          <p className="text-xs md:text-sm tracking-[0.15em] text-[#cbd5e1] font-medium uppercase">
            Dining & Transportation — Louisville, KY
          </p>
        </div>

        {/* Issuer Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] md:text-xs text-[#94a3b8] mb-6 border-b border-[#243044] pb-4">
          <div>
            <span>Issued By: </span>
            <span className="text-[#e2e8f0] font-bold">{EXPERIENCE_DATA.issuer}</span>
            <span className="hidden md:inline"> • Experience Allocation Division</span>
          </div>
          <div className="mt-2 md:mt-0">
            <span>Allocation ID: </span>
            <span className="text-[#e2e8f0] font-bold">{EXPERIENCE_DATA.allocationId}</span>
          </div>
        </div>

        {/* Recipients */}
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.1em] text-[#94a3b8] uppercase mb-3">This Certificate is Issued To</p>
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-bold text-[#cbd5e1]">{EXPERIENCE_DATA.recipients[0].name}</h3>
            <p className="text-xs text-[#94a3b8] italic">and</p>
            <h3 className="text-xl md:text-2xl font-bold text-[#cbd5e1]">
              {EXPERIENCE_DATA.recipients[1].name} 
              {EXPERIENCE_DATA.recipients[1].nickname && (
                <span className="text-[#cbd5e1] font-normal ml-2 opacity-80 italic">
                  ("{EXPERIENCE_DATA.recipients[1].nickname}")
                </span>
              )}
            </h3>
          </div>
        </div>

        {/* Entitlement */}
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.1em] text-[#94a3b8] uppercase mb-4">Experience Entitlement</p>
          <div className="text-sm md:text-base text-[#e2e8f0] mb-4 leading-relaxed">
            This certificate entitles the recipients to the following:
          </div>
          <ul className="space-y-3 pl-5 list-disc text-sm text-[#e2e8f0] mb-4">
            <li>Luxury ride service to and from downtown Louisville</li>
            <li>Dinner and drinks at the restaurant of their choice</li>
            <li>Safe return transportation at the conclusion of the evening</li>
          </ul>
          <p className="text-xs text-[#cbd5e1] leading-relaxed italic">
            Transportation will be provided via premium ride service. Dining venue selection is at the recipients' discretion.
          </p>
        </div>

        {/* Validity Box */}
        <div className="bg-[#0f1b31] border border-[#243044] rounded-xl p-5 mb-8">
          <p className="text-[10px] tracking-[0.1em] text-[#94a3b8] uppercase mb-2">Validity Period</p>
          <p className="serif text-lg md:text-xl font-bold text-[#f8fafc] mb-2">{EXPERIENCE_DATA.validity}</p>
          <p className="text-xs text-[#cbd5e1] leading-relaxed">
            This experience is available for use exclusively during the validity period shown above. Redemption outside this window is not permitted.
          </p>
        </div>

        {/* Redemption & Terms Section */}
        <div className="border-t border-[#243044] pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-[10px] tracking-[0.1em] text-[#94a3b8] uppercase mb-3">Redemption Instructions</p>
              <p className="text-xs text-[#cbd5e1] leading-relaxed">
                To redeem this experience, recipients must {' '}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#b08d57] font-bold underline underline-offset-4 hover:text-[#e5c185] transition-colors"
                >
                  select a preferred date
                </button>
                {' '} within the validity period and notify the concierge a minimum of <span className="text-[#e2e8f0] font-bold">24 hours</span> in advance.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.1em] text-[#94a3b8] uppercase mb-3">Terms & Conditions</p>
              <ul className="text-[11px] text-[#cbd5e1] leading-relaxed list-disc pl-4 space-y-1">
                <li>Certificate has no cash value.</li>
                <li>Experience is non-transferable.</li>
                <li>Subject to service availability.</li>
              </ul>
            </div>
          </div>

          {/* Centered Action Button Styled Like Validity Box */}
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0f1b31] border border-[#243044] rounded-xl p-6 w-full max-w-sm hover:border-[#b08d57]/50 transition-all group flex flex-col items-center shadow-lg"
            >
              <p className="text-[10px] tracking-[0.2em] text-[#94a3b8] uppercase mb-2 group-hover:text-[#b08d57] transition-colors">Experience Selection</p>
              <p className="serif text-xl font-bold text-[#f8fafc] mb-1">Select Reservation Date</p>
              <div className="w-12 h-0.5 bg-[#b08d57]/30 mt-2 group-hover:w-20 transition-all"></div>
            </button>
          </div>
        </div>

        {/* Authorization Footer */}
        <div className="border-t border-[#243044] pt-6 flex flex-col md:flex-row justify-between items-end">
          <div className="text-[11px] space-y-1 w-full md:w-auto mb-4 md:mb-0">
            <p className="text-[#94a3b8] tracking-widest uppercase mb-1">Authorized By</p>
            <p className="text-[#e2e8f0] font-bold">{EXPERIENCE_DATA.authorizedBy}</p>
            <p className="text-[#94a3b8]">Issued: {EXPERIENCE_DATA.issuedDate}</p>
          </div>
          <div className="text-right w-full md:w-auto">
            <p className="text-[10px] text-[#94a3b8] tracking-widest uppercase mb-4">Signature</p>
            <div className="h-px bg-[#3b4760] w-full md:w-48 mb-2 ml-auto"></div>
            <p className="signature-font text-3xl text-[#e2e8f0]">Mark</p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 h-0.5 bg-[#b08d57]/40 rounded-full"></div>
        <p className="text-[10px] text-center text-[#64748b] mt-4 uppercase tracking-tighter">
          For use by the named recipients only.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
