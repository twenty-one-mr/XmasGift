
import React, { useState } from 'react';

interface DateChooserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DateChooserModal: React.FC<DateChooserModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  // Custom calendar for the requested February range (1-31)
  const daysInFeb = 31;
  const startDay = 0; // Sunday for Feb 1, 2026
  const calendarDays = Array.from({ length: daysInFeb }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      setIsConfirmed(true);
    }
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    setSelectedDate(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f172a]/90 backdrop-blur-sm transition-opacity animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-[#0b1220] border border-[#2b3447] rounded-2xl shadow-2xl overflow-hidden transform animate-in zoom-in-95 duration-300">
        <div className="h-1.5 gold-shimmer"></div>
        
        <div className="p-8">
          {!isConfirmed ? (
            <>
              <div className="text-center mb-6">
                <h3 className="serif text-2xl font-bold text-[#f8fafc] mb-2 uppercase tracking-wide">Select Your Evening</h3>
                <p className="text-xs text-[#94a3b8] uppercase tracking-widest">February 2026</p>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-8">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="text-center text-[10px] font-bold text-[#64748b] py-2">{day}</div>
                ))}
                {blanks.map((b) => (
                  <div key={`blank-${b}`} className="p-2"></div>
                ))}
                {calendarDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                      selectedDate === day
                        ? 'bg-[#b08d57] text-[#0f172a] font-bold scale-110 shadow-lg shadow-[#b08d57]/20'
                        : 'text-[#cbd5e1] hover:bg-[#1e293b] hover:text-white'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleConfirm}
                  disabled={!selectedDate}
                  className="w-full bg-[#b08d57] text-[#0f172a] py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#e5c185] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Confirm Selection
                </button>
                <button
                  onClick={onClose}
                  className="w-full bg-transparent border border-[#2b3447] text-[#94a3b8] py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#1e293b] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 bg-[#b08d57]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#b08d57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="serif text-2xl font-bold text-[#f8fafc] mb-2 uppercase">Date Reserved</h3>
              <p className="text-[#cbd5e1] mb-8 leading-relaxed">
                Your preferred experience date for <br />
                <span className="text-[#b08d57] font-bold text-xl">February {selectedDate}, 2026</span>
                <br /> has been noted.
              </p>
              <button
                onClick={handleResetAndClose}
                className="w-full bg-[#b08d57] text-[#0f172a] py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#e5c185] transition-colors shadow-lg shadow-[#b08d57]/20"
              >
                Close and Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateChooserModal;
