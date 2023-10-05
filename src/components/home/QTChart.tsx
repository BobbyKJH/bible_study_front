/** React */
import React from 'react';
/** Chart */
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, Tooltip } from 'recharts'
/** Query */
import { useQTChartQuery } from '@/api/AdminQuery.ts'
/** Style */
import { ChartBox, ChartTitle } from '@style/common/ChartStyle.ts'

interface QTChartProps {
	startDate: string;
	endDate: string;
}

const QTChart: React.FC<QTChartProps> = (props) => {
	const { startDate, endDate } = props;
	const { data: PBS, isLoading } = useQTChartQuery(startDate, endDate);

	const day = ["일", "월", "화", "수", "목", "금", "토"];

	const data = !isLoading && PBS.map((pbs: { chart: number }, idx: number) => {
		return { day: day[idx], chart: pbs.chart };
	});

	return (
		<ChartBox>
			<ChartTitle>QT</ChartTitle>

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
					<Bar name={"QT"} dataKey="chart" stackId="a" fill="#4573fe" />
				</BarChart>
			</ResponsiveContainer>
		</ChartBox>
	);
};

export default QTChart;

