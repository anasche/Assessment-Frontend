import React, { useEffect } from "react";
import RaceDetailHeader from "@/widgets/RaceDetail/RaceDetailHeader";
import RaceResultsTable from "@/widgets/RaceDetail/RaceResultsTable";
import RaceBanner from "@/widgets/RaceDetail/RaceBanner";
import NewsGrid from "@/widgets/News/NewsGrid";
import BookExperience from "@/widgets/Home/BookExperience";

const RaceDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RaceDetailHeader />
      <RaceResultsTable />
      {/* <RaceBanner /> */}
      <BookExperience />
      <div className="bg-gray-50/30">
        <div className="container mx-auto px-4 max-w-7xl pt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A0B14] mb-2">News</h2>
            <p className="text-gray-500 text-sm">
              Explore and read latest news
            </p>
          </div>
          <NewsGrid />
        </div>
      </div>
    </>
  );
};

export default RaceDetail;
