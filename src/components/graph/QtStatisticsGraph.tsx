import React from "react";
/** Api */
import { useQTChartQuery } from "@/api/AdminQuery";
/** ReChart */
import { Bar, Tooltip, XAxis, CartesianGrid } from "recharts";
/** Style */
import {
  QTBarChart,
  QtResponsiveContainer,
} from "@/components/graph/QtStatisticsGraph.styled";

interface Props {
  startDate: string;
  endDate: string;
}

const QtStatisticsGraph: React.FC<Props> = ({ startDate, endDate }) => {
  const { data, isLoading } = useQTChartQuery(startDate, endDate);

  const QtData =
    !isLoading &&
    data.map((pbs: { date: string; chart: number }, idx: number) => {
      const day = ["일", "월", "화", "수", "목", "금", "토"];
      return { date: day[idx], QT: pbs.chart };
    });

  console.log(!isLoading && QtData);

  return (
    <QtResponsiveContainer width={"50%"}>
      <QTBarChart
        data={QtData}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <Tooltip />
        <Bar
          dataKey="QT"
          fill="#8884d8"
          label={{ position: "center", fill: "#fff" }}
        />
      </QTBarChart>
    </QtResponsiveContainer>
  );
};

export default QtStatisticsGraph;
