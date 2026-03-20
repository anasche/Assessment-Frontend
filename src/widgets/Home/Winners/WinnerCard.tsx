import React from 'react';
import { Clock, Globe, User, Shield } from 'lucide-react';
import Winners1 from "@/assets/images/winners/winners.png";

interface WinnerCardProps {
  winner: {
    horse: string;
    owner: string;
    trainer: string;
    jockey: string;
    rank?: number;
    time?: string;
    distance?: string;
    title?: string;
  };
}

const WinnerCard: React.FC<WinnerCardProps> = ({ winner }) => {
  // Function to split title into two lines intelligently
  const splitTitle = (title?: string) => {
    const defaultTitle = "Moroccan leg of the UAEPresidentCup Series";
    const fullTitle = title || defaultTitle;
    
    // For the default title, use the specific split
    if (fullTitle === defaultTitle) {
      return {
        line1: "Moroccan leg of the",
        line2: "UAEPresidentCup Series"
      };
    }
    
    // For other titles, split at roughly the middle
    const words = fullTitle.split(' ');
    const midPoint = Math.ceil(words.length / 2);
    
    return {
      line1: words.slice(0, midPoint).join(' '),
      line2: words.slice(midPoint).join(' ')
    };
  };

  const titleLines = splitTitle(winner.title);

  return (
    <div className="bg-[#141473] rounded-[20px] md:rounded-[30px] p-5 md:p-6 text-white shadow-xl relative overflow-hidden flex flex-col">
      <h3 className="font-syne font-normal text-[35px] leading-[35px] tracking-[-0.03em] text-center mb-6 px-2">
        <div>{titleLines.line1}</div>
        <div>{titleLines.line2}</div>
      </h3>

      <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
        <div className="flex items-center gap-2 text-white/80">
          <Clock size={14} className="text-white/60 md:w-4 md:h-4" />
          <span className="text-[10px] md:text-xs font-medium">{winner.time || "02:21:43"}</span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Globe size={14} className="text-white/60 md:w-4 md:h-4" />
          <span className="text-[10px] md:text-xs font-medium">{winner.distance || "2,000 Km"}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-shrink-0">
            <img src={Winners1} alt="Silk" className="w-16 h-16 object-contain" />
          </div>

          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-4 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <User size={14} className="text-white/60" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] text-white/40 font-medium">Jockey</span>
                <span className="text-sm font-bold leading-tight capitalize truncate sm:whitespace-normal">{winner.jockey.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <Shield size={14} className="text-white/60" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] text-white/40 font-medium">Trainer</span>
                <span className="text-sm font-bold leading-tight capitalize truncate sm:whitespace-normal">{winner.trainer.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <Globe size={14} className="text-white/60" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] text-white/40 font-medium">Owner</span>
                <span className="text-sm font-bold leading-tight capitalize truncate sm:whitespace-normal">{winner.owner.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
