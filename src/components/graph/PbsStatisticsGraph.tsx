import React from "react";
/** Api */
import { usePBSChartQuery } from "@/api/AdminQuery";
/** ReChart */
import { Bar, XAxis, CartesianGrid, Tooltip } from "recharts";
/** Style */
import {
  PbsBarChart,
  PbsResponsiveContainer,
} from "@/components/graph/PbsStatisticsGraph.styled";

interface Props {
  startDate: string;
  endDate: string;
}

const PbsStatisticsGraph: React.FC<Props> = ({ startDate, endDate }) => {
  const { data, isLoading } = usePBSChartQuery(startDate, endDate);

  const PbsData =
    !isLoading &&
    data.map((pbs: { date: string; chart: number }, idx: number) => {
      const day = ["월", "화", "수", "목", "금", "토", "일"];
      return { date: day[idx], PBS: pbs.chart };
    });

  return (
    <PbsResponsiveContainer width={"50%"}>
      <PbsBarChart
        data={PbsData}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <Tooltip />
        <Bar
          dataKey="PBS"
          fill="#000"
          label={{ position: "center", fill: "#fff" }}
        />
      </PbsBarChart>
    </PbsResponsiveContainer>
  );
};

export default PbsStatisticsGraph;
