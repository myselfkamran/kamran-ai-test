import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { chatWithAssociate } from '../services/gemini';
import { ChatMessage } from '../types';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Redemptive Capital. I am your AI Associate. How can I assist you with our investment strategy today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setIsLoading(true);
    
    // Optimistic update
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);

    try {
        const apiHistory = newHistory.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const responseText = await chatWithAssociate(apiHistory.slice(0, -1), userMsg);
        
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
        setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the secure server. Please try again later." }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-[#A88659] text-white p-4 rounded-full shadow-2xl hover:bg-[#07283B] transition-all duration-300 hover:scale-105 border border-white/20 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <Sparkles className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-50 w-full max-w-sm md:max-w-md bg-white border border-slate-200 rounded-sm shadow-2xl transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-[#07283B]">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-[#00A0DF] animate-pulse"></div>
             <div>
                 <h3 className="text-white font-serif text-sm font-semibold">Redemptive Associate</h3>
                 <p className="text-slate-400 text-xs">Always available to LPs.</p>
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-5 space-y-5 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-[#A88659] text-white rounded-t-lg rounded-bl-lg' 
                  : 'bg-white text-[#07283B] rounded-t-lg rounded-br-lg border border-slate-100'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white text-slate-400 p-4 rounded-t-lg rounded-br-lg border border-slate-100 flex gap-1 shadow-sm">
                 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-5 bg-white border-t border-slate-100">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="w-full bg-slate-50 border border-slate-200 rounded-sm py-4 pl-4 pr-12 text-sm text-[#07283B] focus:outline-none focus:border-[#A88659] focus:bg-white transition-all placeholder-slate-400 font-light"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-slate-400 hover:text-[#A88659] disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};