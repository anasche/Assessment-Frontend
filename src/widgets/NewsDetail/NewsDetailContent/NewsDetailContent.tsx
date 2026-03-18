import React from 'react';

const NewsDetailContent: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="space-y-12">
          {/* Date Badge */}
          <div className="flex justify-end">
            <span className="bg-gray-100 text-gray-600 text-[10px] font-medium uppercase tracking-widest px-4 py-2 rounded-full">
              March 15, 2024 - 10:49 AM
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-syne">
              Congratulations to the champions of the Moroccan leg of the UAE President Cup Series
            </h2>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                👤
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-widest block font-medium">
                  By
                </span>
                <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Mustafa Hassan
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                The winners were honored by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, and Omar Al Saqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                The distinguished winners were celebrated in a formal ceremony, attended by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, who represents the UAE's diplomatic interests in Morocco. They were joined by His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, an organization dedicated to promoting and preserving the heritage of Arabian horse racing, which is deeply embedded in the culture of the Gulf region.
              </p>
            </div>
          </div>

          {/* Image Gallery Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[30px] overflow-hidden shadow-lg aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1599407981387-578cf36c0757?auto=format&fit=crop&q=80&w=800" 
                alt="Race highlight" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden shadow-lg aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1534491336113-f43405391d84?auto=format&fit=crop&q=80&w=800" 
                alt="Winners portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Secondary Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              The Morocco stage of the 2024 UAE President Cup Series witnessed a field of elite Arabian horses from across North Africa and the Gulf region. The race, held under perfect weather conditions with temperatures hovering around 22°C, saw BURAAK break steadily from gate four and settle into a comfortable rhythm in the early stages.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              NOA GRAD, last year's champion and trained by Jean-François Bernard and piloted by Jean Bernard Eyquem, gave chase throughout but could never quite close the gap, finishing a respectable second and conceding MAD 150,000.
            </p>
            
            {/* Blockquote */}
            <div className="border-l-4 border-[#161687] pl-8 py-6 my-12 bg-gray-50 rounded-r-lg">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-medium italic">
                "BURAAK demonstrated exceptional stamina and speed today. This victory is a testament to the quality of Arabian breeding in Morocco and the dedication of our training programs."
              </p>
              <cite className="text-sm font-bold text-gray-600 uppercase tracking-widest not-italic">
                — Mohamed Bessouit, Trainer
              </cite>
            </div>

            {/* Featured Image */}
            <div className="rounded-[30px] overflow-hidden shadow-xl my-12 relative">
              <img 
                src="https://images.unsplash.com/photo-1599407981387-578cf36c0757?auto=format&fit=crop&q=80&w=1200" 
                alt="Main Race Image" 
                className="w-full h-auto aspect-video object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white/80 text-xs uppercase tracking-widest text-center">
                  BURAAK crosses the finish line ahead of the competition at Anfa Racecourse - Casablanca
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              The trophy presentation ceremony was attended by His Excellency Omar Abdulrahman Al Attiyah, UAE Consul in Rabat, who congratulated the winning connections and praised the continued growth of Arabian horse racing in Morocco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailContent;
