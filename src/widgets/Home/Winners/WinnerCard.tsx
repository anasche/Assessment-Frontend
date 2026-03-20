import React from 'react';
import { Clock, Globe } from 'lucide-react';
import { JockeyIcon, TrainerIcon, OwnerIcon } from '@/components/icons/PersonnelIcons';
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
    <div className="bg-[#141473] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] p-4 sm:p-5 md:p-6 text-white shadow-xl relative overflow-hidden flex flex-col">
      <h3 className="font-syne font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] leading-tight sm:leading-snug md:leading-normal lg:leading-tight xl:leading-[35px] tracking-[-0.03em] text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2">
        <div>{titleLines.line1}</div>
        <div>{titleLines.line2}</div>
      </h3>

      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
          <Clock size={12} className="text-white/60 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium">{winner.time || "02:21:43"}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
          <Globe size={12} className="text-white/60 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium">{winner.distance || "2,000 Km"}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-2 sm:mt-3 md:mt-4">
        <div className="flex items-end justify-between gap-2 sm:gap-3 md:gap-4">
          <div className="flex-shrink-0">
            <img src={Winners1} alt="Silk" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <JockeyIcon size={10} className="text-white/60 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[8px] sm:text-[9px] text-white/40 font-medium">Jockey</span>
                <span className="text-xs sm:text-sm font-bold leading-tight capitalize truncate sm:whitespace-normal">{winner.jockey.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <TrainerIcon size={10} className="text-white/60 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[8px] sm:text-[9px] text-white/40 font-medium">Trainer</span>
                <span className="text-xs sm:text-sm font-bold leading-tight capitalize truncate sm:whitespace-normal">{winner.trainer.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 col-span-2 sm:col-span-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <OwnerIcon size={10} className="text-white/60 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[8px] sm:text-[9px] text-white/40 font-medium">Owner</span>
                <span className="text-xs sm:text-sm font-bold leading-tight capitalize truncate sm:whitespace-normal">{winner.owner.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
