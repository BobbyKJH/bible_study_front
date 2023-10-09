/** React */
import React from 'react';
/** Chart */
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, Tooltip } from 'recharts'
/** Query */
import { usePBSChartQuery } from '@/api/AdminQuery.ts'
/** Style */
import { ChartBox, ChartTitle } from '@style/common/ChartStyle.ts'

interface PBSChartProps {
	startDate: string;
	endDate: string;
}

const PBSChart: React.FC<PBSChartProps> = (props) => {
	const { startDate, endDate } = props;
	const { data: PBS, isLoading } = usePBSChartQuery(startDate, endDate);

	const day = ["일", "월", "화", "수", "목", "금", "토"];

	const data = !isLoading && PBS.map((pbs: { chart: number }, idx: number) => {
		return { day: day[idx], chart: pbs.chart };
	});

	return (
		<ChartBox>
			<ChartTitle>PBS</ChartTitle>
			<ResponsiveContainer width={"90%"} height={"100%"}>
				<BarChart
					data={data}
					margin={{
						top: 20,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" fontSize={"12px"} />
					<Tooltip />
					<Legend />
					<Bar name={"PBS"} dataKey="chart" stackId="a" fill="#48c732" />
				</BarChart>
			</ResponsiveContainer>
		</ChartBox>
	);
};

export default PBSChart;
