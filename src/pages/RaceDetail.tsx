import React, { useEffect } from "react";
import RaceDetailHeader from "@/widgets/RaceDetail/RaceDetailHeader";
import RaceResultsTable from "@/widgets/RaceDetail/RaceResultsTable";
import BookExperience from "@/widgets/Home/BookExperience";
import News from "@/widgets/Home/News";

const RaceDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RaceDetailHeader />
      <RaceResultsTable />
      <BookExperience />
      <News />
    </>
  );
};

export default RaceDetail;
