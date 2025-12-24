
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/geminiService';
import { Message } from '../types';

const ConciergeChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Good evening, Kathy and Moe. I am your Private Concierge. Shall I suggest some exquisite dining options in downtown Louisville for your upcoming evening out?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getConciergeResponse(input);
    const modelMsg: Message = { role: 'model', text: response || "I'm sorry, I couldn't process that request. Let me know if you'd like another suggestion!" };
    
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#0b1220] border border-[#2b3447] rounded-xl overflow-hidden flex flex-col h-[450px] shadow-xl">
      <div className="bg-[#0f1b31] p-4 border-b border-[#243044] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-bold text-[#e2e8f0] tracking-widest uppercase">Concierge Assistant</span>
        </div>
        <span className="text-[10px] text-[#94a3b8]">Live Support</span>
      </div>

      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-transparent to-[#080d1a]">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-[#b08d57] text-[#0f172a] font-medium' 
                : 'bg-[#1e293b] text-[#cbd5e1] border border-[#2d3748]'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#1e293b] rounded-2xl px-4 py-3 border border-[#2d3748]">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-[#94a3b8] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#94a3b8] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#94a3b8] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#243044] bg-[#0b1220]">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about restaurants or logistics..."
            className="flex-1 bg-[#0f172a] border border-[#2b3447] rounded-lg px-4 py-2 text-sm text-[#e2e8f0] focus:outline-none focus:border-[#b08d57] transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#b08d57] text-[#0f172a] px-4 py-2 rounded-lg font-bold text-xs uppercase hover:bg-[#e5c185] transition-colors disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConciergeChat;
