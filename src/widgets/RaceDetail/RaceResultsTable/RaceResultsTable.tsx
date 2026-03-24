import React from 'react';
import { EventItem } from '@/hooks/useApi';
import { formatDate } from '@/utils/dateHelpers';

interface RaceResultsTableProps {
  eventItem: EventItem;
}

const RaceResultsTable: React.FC<RaceResultsTableProps> = ({ eventItem }) => {
  // Sort members by rank (nulls last) and take first 10 for display
  const sortedMembers = [...eventItem.members]
    .sort((a, b) => {
      if (a.rank === null && b.rank === null) return 0;
      if (a.rank === null) return 1;
      if (b.rank === null) return -1;
      return a.rank - b.rank;
    })
    .slice(0, 10);

  if (sortedMembers.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Participants</h2>
          <p className="text-gray-600">No participants data available for this event.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-0">
          {sortedMembers.map((member, idx) => (
            <div 
              key={member._id} 
              className={`flex items-center px-8 py-6 ${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
            >
              {/* Position */}
              <div className="flex-shrink-0 mr-8">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {member.rank !== null ? member.rank : idx + 1}
                </div>
              </div>

              {/* Profile Picture */}
              <div className="flex-shrink-0 mr-8">
                {member.profilePicture ? (
                  <img 
                    src={member.profilePicture} 
                    alt={member.name || 'Participant'} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-2xl">🏇</span>
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="flex-shrink-0 mr-12 min-w-[200px]">
                <div className="font-bold text-gray-900 text-lg">
                  {member.name || `Draw ${member.draw}`}
                  {member.country && (
                    <span className="text-gray-600"> ({member.country})</span>
                  )}
                </div>
              </div>

              {/* Owner, Trainer, Jockey */}
              <div className="flex-1 mr-12">
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-gray-600">Owner : </span>
                    <span className="text-gray-900 font-semibold">{member.horse?.owner?.name || 'N/A'}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Trainer : </span>
                    <span className="text-gray-900 font-semibold">{member.trainer?.name || 'N/A'}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Jockey : </span>
                    <span className="text-gray-900 font-semibold">{member.jockey?.name || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Weight Earning and Date of Birth */}
              <div className="flex-shrink-0 text-right">
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-gray-600">Weight Earning : </span>
                    <span className="text-gray-900 font-bold">
                      {member.weight ? `${member.weight}kg` : '80kg'} - {member.earning.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Date of Birth : </span>
                    <span className="text-gray-900 font-semibold">
                      {member.horse?.dob ? formatDate(member.horse.dob) : '25/10/2021'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceResultsTable;
