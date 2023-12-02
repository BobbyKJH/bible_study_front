import React from "react";
/** Api */
import { useAdminQuery } from "@/api/AdminQuery";
/** Component */
import PbsBible from "@/components/home/PbsBible";
import QtStatisticsGraph from "@/components/graph/QtStatisticsGraph";
import PbsStatisticsGraph from "@/components/graph/PbsStatisticsGraph";

const HomePage: React.FC = () => {
  const { data, isLoading } = useAdminQuery();

  if (isLoading) {
    return <>Graph</>;
  }

  return (
    <div>
      <PbsBible />
      <div style={{ display: "flex" }}>
        <PbsStatisticsGraph startDate={data.startDate} endDate={data.endDate} />
        <QtStatisticsGraph startDate={data.startDate} endDate={data.endDate} />
      </div>
    </div>
  );
};

export default HomePage;
