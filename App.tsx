
import React, { useEffect, useState } from 'react';
import Certificate from './components/Certificate';
import ConciergeChat from './components/ConciergeChat';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] selection:bg-[#b08d57] selection:text-[#0f172a]">
      {/* Hero / Intro Section */}
      <section className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} pt-20 pb-12 px-6`}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-8 border border-[#b08d57]/30 bg-[#b08d57]/10 rounded-full">
            <span className="text-[#b08d57] text-[10px] font-bold tracking-[0.2em] uppercase">Private Invitation</span>
          </div>
          <h1 className="serif text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            A Louisville <br className="hidden md:block" /> Night Out
          </h1>
          <p className="text-[#cbd5e1] text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mb-10">
            Dinner, drinks, and a night with nowhere else to be. No schedules to rush. Just good food, great conversation, and the freedom to enjoy.
          </p>
          
          <div className="flex flex-col items-center space-y-4 mb-16">
            <div className="w-px h-16 bg-gradient-to-b from-[#b08d57] to-transparent"></div>
            <p className="text-[10px] text-[#94a3b8] tracking-[0.3em] uppercase">Scroll to Reveal Certificate</p>
          </div>
        </div>
      </section>

      {/* Main Experience Display */}
      <section className="px-6 py-12">
        <Certificate />
      </section>

      {/* Detail Block from Gift Page */}
      <section className="px-6 py-12 bg-[#0b1220]/50">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="serif text-2xl text-[#f8fafc]">Included in this evening</h3>
            <div className="w-12 h-0.5 bg-[#b08d57] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0f1b31] border border-[#243044] rounded-xl hover:border-[#b08d57]/50 transition-colors">
              <div className="text-2xl mb-3">🚗</div>
              <p className="text-sm font-semibold mb-1">Luxury Ride</p>
              <p className="text-xs text-[#94a3b8]">Premium service to your destination of choice.</p>
            </div>
            <div className="p-6 bg-[#0f1b31] border border-[#243044] rounded-xl hover:border-[#b08d57]/50 transition-colors">
              <div className="text-2xl mb-3">🍽️</div>
              <p className="text-sm font-semibold mb-1">Fine Dining</p>
              <p className="text-xs text-[#94a3b8]">Full dinner and cocktails, wherever you desire.</p>
            </div>
            <div className="p-6 bg-[#0f1b31] border border-[#243044] rounded-xl hover:border-[#b08d57]/50 transition-colors">
              <div className="text-2xl mb-3">✨</div>
              <p className="text-sm font-semibold mb-1">Zero Worry</p>
              <p className="text-xs text-[#94a3b8]">A safe, comfortable return home whenever you're ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Interaction Section */}
      <section className="px-6 py-24 bg-[#080d1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="serif text-3xl font-bold mb-4">The Concierge Assistant</h2>
            <p className="text-[#94a3b8] text-sm md:text-base max-w-lg mx-auto italic">
              Use our private AI assistant to explore Louisville's best culinary experiences or to coordinate your upcoming night out.
            </p>
          </div>
          <ConciergeChat />
        </div>
      </section>

      {/* Footer / Sign-off */}
      <footer className="py-20 px-6 border-t border-[#243044] text-center">
        <div className="max-w-xs mx-auto">
          <p className="text-[10px] text-[#94a3b8] tracking-[0.2em] uppercase mb-4">With Love</p>
          <p className="signature-font text-4xl text-[#f8fafc] mb-6">Mark</p>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#b08d57] to-transparent mb-8"></div>
          <p className="text-xs text-[#64748b]">
            Present this digital experience to your private chauffeur upon arrival.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
