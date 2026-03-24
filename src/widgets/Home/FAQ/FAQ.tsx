import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Title from '@/components/Title';
import { useFAQ } from '@/hooks/useApi';
import Loading from '@/components/Loading';

const FAQ: React.FC = () => {
  const { data: faqResponse, isLoading, error, isError } = useFAQ('en');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (isLoading) return <Loading />;
  
  if (isError) {
    return (
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
          <div className="text-center">
            <p className="text-red-600">Failed to load FAQ: {error?.message}</p>
          </div>
        </div>
      </section>
    );
  }

  const faqs = faqResponse?.data || [];

  if (faqs.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
          <div className="text-center">
            <Title dark={true} className="mb-5 text-center">
              FAQ
            </Title>
            <p className="text-gray-600">No FAQ data available</p>
          </div>
        </div>
      </section>
    );
  }

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
                key={faq._id}
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
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <div className="space-y-3">
                    {faq.answers.map((answer, answerIndex) => (
                      <p key={answer._id} className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                        {answer.text}
                      </p>
                    ))}
                  </div>
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
