import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export interface Asset {
	name: string;
	value: number | string;
	[key: string]: string | number | Date | undefined;
}

interface Props {
	data: Asset[];
	xAxisDataKey?: string;
	yAxisDataKey?: string;
	dataKey?: string;
}

export const AssetAreaChart = (props: Props) => {
	const { data, xAxisDataKey, yAxisDataKey, dataKey } = props;

	return (
		<ResponsiveContainer width="100%" aspect={5}>
			<AreaChart width={600} height={400} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey={xAxisDataKey || "name"} />
				<YAxis dataKey={yAxisDataKey} width={100} />
				<Tooltip />
				<Area
					type="monotone"
					dataKey={dataKey || "value"}
					stroke="#8884d8"
					fill="#8884d8"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};
