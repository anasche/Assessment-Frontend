import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Title from '@/components/Title';

const FAQ: React.FC = () => {
  const faqs = [
    { question: 'What is the UAE President Cup Series?', answer: 'The UAE President Cup is a series of international races for purebred Arabian horses, established to promote the heritage and beauty of the breed globally.' },
    { question: 'What is the UAE President Cup Series?', answer: 'The UAE President Cup is a series of international races for purebred Arabian horses, established to promote the heritage and beauty of the breed globally.' },
    { question: 'What is the UAE President Cup Series?', answer: 'The UAE President Cup is a series of international races for purebred Arabian horses, established to promote the heritage and beauty of the breed globally.' },
    { question: 'What is the UAE President Cup Series?', answer: 'The UAE President Cup is a series of international races for purebred Arabian horses, established to promote the heritage and beauty of the breed globally.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <Title dark={true} className="mb-5 text-center">
              FAQ
            </Title>
            <p className="mb-12 font-medium text-[17px] leading-none tracking-tightest text-black">
              Common questions about the series
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0 pb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span
                    className={`text-lg font-bold tracking-tight transition-colors ${openIndex === index ? "text-blue-600" : "text-[#0A0B14] group-hover:text-blue-600"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
