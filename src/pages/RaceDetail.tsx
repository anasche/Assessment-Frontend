import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEventById } from "@/hooks/useApi";
import RaceDetailHeader from "@/widgets/RaceDetail/RaceDetailHeader";
import RaceResultsTable from "@/widgets/RaceDetail/RaceResultsTable";
import BookExperience from "@/widgets/Home/BookExperience";
import News from "@/widgets/Home/News";
import Loading from "@/components/Loading";

const RaceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: eventItem, isLoading, error, isError } = useEventById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !eventItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">
            {error?.message || 'The event you are looking for does not exist.'}
          </p>
          <a 
            href="/races" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Races
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <RaceDetailHeader eventItem={eventItem} />
      <RaceResultsTable eventItem={eventItem} />
      <BookExperience />
      <News />
    </>
  );
};

export default RaceDetail;
